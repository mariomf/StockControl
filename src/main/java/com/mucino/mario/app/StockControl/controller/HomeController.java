package com.mucino.mario.app.StockControl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
    public String index(){
		
        return "index.html";
    }

//    @GetMapping("/order")
//    public String order(){
//        return "pruebaFormulario.html";
//    }
//
//    @GetMapping("/result")
//    public String result(){
//        return "result.html";
//    }
}
