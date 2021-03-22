package com.higradius;

import java.sql.Connection;
import java.sql.DriverManager;

public class MyConnection {
	
	private Connection connection;
	public Connection connection() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/h2h_internship","root","root");
		}catch(Exception e){
			e.printStackTrace();
		}
		return connection;
	}
}