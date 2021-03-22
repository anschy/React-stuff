package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class EditServlet extends HttpServlet{
	
public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException	{            
		
		long id = Long.valueOf(request.getParameter("id"));
		double amount = Double.valueOf(request.getParameter("amount"));
		String notes = request.getParameter("notes");
		
		Gson gson = new Gson();
		response.setContentType("application/json");
		PrintWriter out = response.getWriter(); 
		String jsonResponse;

		try {

			MyConnection myConnection = new MyConnection();		
	
			PreparedStatement preparedStatement = myConnection.connection().prepareStatement("UPDATE invoice_details SET total_open_amount=?,notes=? WHERE doc_id=?;");	
			preparedStatement.setObject(1, amount);
			preparedStatement.setObject(2, notes);
			preparedStatement.setObject(3, id);
			
			int returnValue = preparedStatement.executeUpdate();
			jsonResponse = gson.toJson(returnValue);
			out.println(jsonResponse);      
			out.flush();
		
		} catch( Exception e) {
			e.printStackTrace();
			jsonResponse = gson.toJson("Error!!");
			out.println(jsonResponse);      
		}
	}

}