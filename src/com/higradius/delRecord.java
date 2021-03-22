package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class delRecord
 */
@WebServlet("/delRecord")
public class delRecord extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public delRecord() {
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
		String[] id = (request.getParameterValues("doc_id"));
		System.out.println(id.toString());
		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/h2h_internship";
		String USER = "root";
		String PASS = "root";
		Connection dbCon = null;
		PreparedStatement pst = null;
		String temp = "";
		for (int i = 0; i < id.length; i++) {
			if (i != id.length - 1) {
				temp += id[i] + " ,";
			}else {
				temp+=id[i];
			}
		}
		System.out.println(temp);
		String query1 = "DELETE FROM invoice_details WHERE doc_id IN ("+temp+")";
		System.out.println(query1);
		try {
			Class.forName(JDBC_DRIVER);
			dbCon = DriverManager.getConnection(DB_URL, USER, PASS);

			pst = dbCon.prepareStatement(query1);
			pst.addBatch();
			pst.executeBatch();
			dbCon.close();
			pst.close();
			Gson gson=new Gson();
			Response r=new Response();
			r.setName("success");
			String data = gson.toJson(r);
			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			out.print(data);
		} catch (Exception e) {

		}
	}

}