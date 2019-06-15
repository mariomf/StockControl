package com.mucino.mario.app.StockControl.service;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

//import org.apache.tomcat.jni.File;
import org.springframework.stereotype.Component;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

@Component
public class BarcodeGenerator {
	
	public Object generateBarcode() throws IOException, WriterException{
	
		String text = "Mario M.F."; // this is the text that we want to encode

		int width = 300;
		int height = 300; // change the height and width as per your requirement

		// (ImageIO.getWriterFormatNames() returns a list of supported formats)
		//String imageFormat = "png"; // could be "gif", "tiff", "jpeg" 

		BitMatrix bitMatrix = new QRCodeWriter().encode(text, BarcodeFormat.QR_CODE, width, height);
		
		//writeToStream(BitMatrix matrix, String format, OutputStream stream)
		//MatrixToImageWriter.writeToStream(bitMatrix, imageFormat, new FileOutputStream(new File("qrcode.png")));
		return MatrixToImageWriter.toBufferedImage(bitMatrix);
		//toBufferedImage(BitMatrix matrix)
		//MatrixToImageWriter.writeToPath(bitMatrix, imageFormat, "")
		
	}

}
