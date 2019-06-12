package com.mucino.mario.app.StockControl.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Products {
	
	@Id
	public ObjectId _id;
	  
	public String product_code;
	public String price;
	  
	// Constructors
	public Products() {}
	  
	public Products(ObjectId _id, String product_code, String price) {
	  this._id = _id;
	  this.product_code = product_code;
	  this.price = price;
	}
	
	// ObjectId needs to be converted to string
	public String get_id() { return _id.toHexString(); }
	public void set_id(ObjectId _id) { this._id = _id; }
	  
	public String getProduct_code() { return product_code; }
	public void setProduct_code(String product_code) { this.product_code = product_code; }
	  
	public String getPrice() { return price; }
	public void setPrice(String price) { this.price = price; }

}
