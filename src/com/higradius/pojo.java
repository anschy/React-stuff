package com.higradius;
import java.sql.Date;
//import java.util.ArrayList; 
//
//import javax.sound.midi.VoiceStatus;
	public class pojo {

		String bussiness_code;
		String cust_number;
		String name_customer;
		Date clear_date;
		short business_year;
		long doc_id;
		Date posting_date;
		Date document_create_date;
		Date due_in_date;
		String invoice_currency;
		String document_type;
		byte posting_id;
		String area_business;
		double total_open_amount;
		Date baseline_create_date;
		String cust_payment_terms;
		long invoice_id;
		Byte isOpen;
		String Notes;
		
		public String getBussiness_code() {
			return bussiness_code;
		}
		public void setBussiness_code(String bussiness_code) {
			this.bussiness_code = bussiness_code;
		}
		public String getCust_number() {
			return cust_number;
		}
		public void setCust_number(String cust_number) {
			this.cust_number = cust_number;
		}
		public String getName_customer() {
			return name_customer;
		}
		public void setName_customer(String name_customer) {
			this.name_customer = name_customer;
		}
		public Date getClear_date() {
			return clear_date;
		}
		public void setClear_date(Date clear_date) {
			this.clear_date = clear_date;
		}
		public short getBusiness_year() {
			return business_year;
		}
		public void setBusiness_year(short business_year) {
			this.business_year = business_year;
		}
		public long getDoc_id() {
			return doc_id;
		}
		public void setDoc_id(long doc_id) {
			this.doc_id = doc_id;
		}
		public Date getPosting_date() {
			return posting_date;
		}
		public void setPosting_date(Date posting_date) {
			this.posting_date = posting_date;
		}
		public Date getDocument_create_date() {
			return document_create_date;
		}
		public void setDocument_create_date(Date document_create_date) {
			this.document_create_date = document_create_date;
		}
		public Date getDue_in_date() {
			return due_in_date;
		}
		public void setDue_in_date(Date due_in_date) {
			this.due_in_date = due_in_date;
		}
		public String getInvoice_currency() {
			return invoice_currency;
		}
		public void setInvoice_currency(String invoice_currency) {
			this.invoice_currency = invoice_currency;
		}
		public String getDocument_type() {
			return document_type;
		}
		public void setDocument_type(String document_type) {
			this.document_type = document_type;
		}
		public byte getPosting_id() {
			return posting_id;
		}
		public void setPosting_id(byte posting_id) {
			this.posting_id = posting_id;
		}
		public String getArea_business() {
			return area_business;
		}
		public void setArea_business(String area_business) {
			this.area_business = area_business;
		}
		public double getTotal_open_amount() {
			return total_open_amount;
		}
		public void setTotal_open_amount(double total_open_amount) {
			this.total_open_amount = total_open_amount;
		}
		public Date getBaseline_create_date() {
			return baseline_create_date;
		}
		public void setBaseline_create_date(Date baseline_create_date) {
			this.baseline_create_date = baseline_create_date;
		}
		public String getCust_payment_terms() {
			return cust_payment_terms;
		}
		public void setCust_payment_terms(String cust_payment_terms) {
			this.cust_payment_terms = cust_payment_terms;
		}
		public long getInvoice_id() {
			return invoice_id;
		}
		public void setInvoice_id(long invoice_id) {
			this.invoice_id = invoice_id;
		}
		public Byte getIsOpen() {
			return isOpen;
		}
		public void setIsOpen(Byte isOpen) {
			this.isOpen = isOpen;
		}
		

		public void setNotes(String notes) {
			// TODO Auto-generated method stub
			this.Notes=notes;
		}
		
		public String getNotes()
		{
			return Notes;
		}
		    
}