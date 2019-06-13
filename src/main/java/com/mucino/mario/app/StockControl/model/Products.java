package com.mucino.mario.app.StockControl.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Products {
	
	@Id
	public ObjectId _id;
	  
	public String product_name;
	public String description;
	public String product_code;
	public String price;
	public String QTY_inStock;
	public String orderNo;
	public String entry_date;
	public String exit_date;
	public String product_type;
	
	  
	// Constructors
	public Products() {}
	  
	public Products(ObjectId _id, String product_name, String description, String product_code, String price,
			String QTY_inStock, String orderNo, String entry_date, String exit_date, String product_type) {
		
	  this._id = _id;
	  this.product_name = product_name;
	  this.description = description;  
	  this.product_code = product_code;
	  this.price = price;
	  this.QTY_inStock = QTY_inStock;
	  this.orderNo = orderNo;
	  this.entry_date = entry_date;
	  this.exit_date = exit_date;
	  this.product_type = product_type;
	}
	
	// ObjectId needs to be converted to string
	public String get_id() { return _id.toHexString(); }
	public void set_id(ObjectId _id) { this._id = _id; }
	
	public String getProduct_name() {return product_name; }
	public void setProduct_naem(String product_name) {this.product_name = product_name; }
	
	public String getDescription() {return description; }
	public void setDescription(String description) {this.description = description;	}
	  
	public String getProduct_code() { return product_code; }
	public void setProduct_code(String product_code) { this.product_code = product_code; }
	  
	public String getPrice() { return price; }
	public void setPrice(String price) { this.price = price; }
	
	public String getQTY_inStock() {return QTY_inStock;	}
	public void setQTY_inStock(String qTY_inStock) {QTY_inStock = qTY_inStock; }

	public String getOrderNo() {return orderNo;	}
	public void setOrderNo(String orderNo) {this.orderNo = orderNo;	}

	public String getEntry_date() {return entry_date; }
	public void setEntry_date(String entry_date) {this.entry_date = entry_date;	}

	public String getExit_date() {return exit_date;	}
	public void setExit_date(String exit_date) {this.exit_date = exit_date;	}

	public String getProduct_type() {return product_type; }
	public void setProduct_type(String product_type) {this.product_type = product_type;	}

}
