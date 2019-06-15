package com.mucino.mario.app.StockControl.controller;

import com.google.zxing.WriterException;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSInputFile;
import com.mucino.mario.app.StockControl.model.Products;
import com.mucino.mario.app.StockControl.repository.ProductsRepository;
import com.mucino.mario.app.StockControl.service.BarcodeGenerator;

import javax.imageio.ImageIO;
import javax.validation.Valid;

import java.awt.image.RenderedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductsController {
	
	@Autowired
	private BarcodeGenerator barcodeGenerator;
	
	@Autowired
	private ProductsRepository repository;
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public void getAllProducts() {
//	  repository.findAll();
//	}
	@RequestMapping(value = "//products", method = RequestMethod.GET)
	public List<Products> getAllProducts() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Products getProductById(@PathVariable("id") ObjectId id) {
	  return repository.findBy_id(id);
	}
	  
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public void modifyProductById(@PathVariable("id") ObjectId id, @Valid @RequestBody Products products) {
		products.set_id(id);
	  repository.save(products);
	}
	  
	@RequestMapping(value = "//products", method = RequestMethod.POST)
	public Products createProduct(@Valid @RequestBody Products products) throws IOException, WriterException {
		
		products.set_id(ObjectId.get());
		
		//*******************************************
		@SuppressWarnings("resource")
		MongoClient mongoClient = new MongoClient();
		//DB database = mongoClient.getDB(MongoDBFactory.STOCK_CONTROL_DB);
		@SuppressWarnings("deprecation")
		DB database = mongoClient.getDB("STOCK_CONTROL_DB");
		String newFileName = "barcode";
		
		File imageFile = new File("image.png");
		ImageIO.write((RenderedImage) barcodeGenerator.generateBarcode(), "png", imageFile);
		
		//byte[] imageFile = (byte[]) barcodeGenerator.generateBarcode();
		GridFS gfsPhoto = new GridFS(database, "photo");
		GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);
		gfsFile.setFilename(newFileName);
		gfsFile.save();
		//*******************************************
		
	  repository.save(products);
	  return products;
	}
	  
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteProduct(@PathVariable ObjectId id) {
	  repository.delete(repository.findBy_id(id));
	}

}
