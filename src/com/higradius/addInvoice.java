package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/**
 * Servlet implementation class addInvoice
 */
//@WebServlet("/addInvoice")
public class addInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public addInvoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		BufferedReader br = request.getReader();
		StringBuffer jb = new StringBuffer();
		String json = "";
		while ((json = br.readLine()) != null)
			jb.append(json);
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		System.out.println(jb.toString());
		pojo a1 = gson.fromJson(jb.toString(), pojo.class);
		System.out.println(a1.getCust_number());
		System.out.println(a1.getInvoice_id());
		System.out.println(a1.getDue_in_date());
		addToDb(a1);
		String data = gson.toJson(a1);
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(data);

	}

	public static void addToDb(pojo dataInvoice) {
		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
		String USER = "root";
		String PASS = "root";
		Connection dbCon = null;
		PreparedStatement pst = null;
	    long now = System.currentTimeMillis();
		String query1 = "INSERT INTO invoice_details VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			Class.forName(JDBC_DRIVER);
			dbCon = DriverManager.getConnection(DB_URL, USER, PASS);
			pst = dbCon.prepareStatement(query1);
			pst.setString(1, dataInvoice.getBussiness_code());
			pst.setString(2, dataInvoice.getCust_number());
			pst.setString(3, dataInvoice.getName_customer());
			pst.setNull(4, java.sql.Types.DATE);
			pst.setInt(5, 2020);
			pst.setLong(6, dataInvoice.getInvoice_id());
			pst.setDate(7, new java.sql.Date(Calendar.getInstance().getTime().getTime()));
			pst.setDate(8, new java.sql.Date(Calendar.getInstance().getTime().getTime()));
			pst.setDate(9, new java.sql.Date(dataInvoice.getDue_in_date().getTime()));
			pst.setString(10, dataInvoice.getInvoice_currency());
			pst.setString(11, dataInvoice.getDocument_type());
			pst.setInt(12, dataInvoice.getPosting_id());
			pst.setString(13, dataInvoice.getArea_business());
			pst.setDouble(14, dataInvoice.getTotal_open_amount());
			pst.setDate(15, new java.sql.Date(Calendar.getInstance().getTime().getTime()));
			pst.setString(16, dataInvoice.getCust_payment_terms());
			pst.setLong(17, dataInvoice.getInvoice_id());
			pst.setInt(18, 0);
			pst.setString(19, dataInvoice.getNotes());
			pst.addBatch();
			pst.executeBatch();
			dbCon.close();
			pst.close();

		} catch (SQLException se) {
			se.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pst != null)
					pst.close();
			} catch (SQLException se2) {
			}
			try {
				if (dbCon != null)
					dbCon.close();
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}

	}

}