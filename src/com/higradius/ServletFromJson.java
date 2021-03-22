package com.higradius;

//import java.awt.List;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class ServletFromJson extends HttpServlet {
	
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException	{            
		String aString=request.getParameter("length");
		String bString=request.getParameter("start");
		
		int length = Integer.parseInt(aString); 
		int start = Integer.parseInt(bString); 
		
		Gson gson = new Gson();
		response.setContentType("application/json");
		PrintWriter out = response.getWriter(); 
		String jsonResponse;
		
		pojo[] invoices = new pojo[length];
		
		try {
		MyConnection myConnection = new MyConnection();		
		PreparedStatement preparedStatement = myConnection.connection().prepareStatement("select cust_number,name_customer,invoice_id,doc_id,total_open_amount,due_in_date,notes from invoice_details LIMIT ?,?;");
		preparedStatement.setObject(1, (start-1)*length);
		preparedStatement.setObject(2, length);

		ResultSet resultSet = preparedStatement.executeQuery();
		int i =0;
		while(resultSet.next()) {
			pojo currentInvoice = new pojo();
			currentInvoice.setDoc_id(resultSet.getLong("doc_id"));
			currentInvoice.setName_customer(resultSet.getString("name_customer"));
			currentInvoice.setCust_number(resultSet.getString("cust_number"));
			currentInvoice.setInvoice_id(resultSet.getLong("invoice_id"));
			currentInvoice.setDue_in_date(resultSet.getDate("due_in_date"));
			currentInvoice.setTotal_open_amount(resultSet.getDouble("total_open_amount"));
			currentInvoice.setNotes(resultSet.getString("notes"));
			invoices[i++] = currentInvoice;
		}
		
			jsonResponse = gson.toJson(invoices);
			out.println(jsonResponse);      
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse = gson.toJson("Error!!");
			out.println(jsonResponse);      
		}
		
	}

}