package com.mucino.mario.app.StockControl.repository;

import com.mucino.mario.app.StockControl.model.Products;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProductsRepository extends MongoRepository<Products, String>{
	
	Products findBy_id(ObjectId _id);

}
