package com.fleeter.entities.customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EnquiryDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int  enq_id;
	private String enqpancardno;
	private String enq_name;
	private String enq_mobno;
	private int enq_requird_amount;
	private int enq_age;
	private String electronic_product_name;
	private String status="pending";
	private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getEnq_id() {
		return enq_id;
	}
	public void setEnq_id(int enq_id) {
		this.enq_id = enq_id;
	}
	public String getEnqpancardno() {
		return enqpancardno;
	}
	public void setEnqpancardno(String enqpancardno) {
		this.enqpancardno = enqpancardno;
	}
	public String getEnq_name() {
		return enq_name;
	}
	public void setEnq_name(String enq_name) {
		this.enq_name = enq_name;
	}
	public String getEnq_mobno() {
		return enq_mobno;
	}
	public void setEnq_mobno(String enq_mobno) {
		this.enq_mobno = enq_mobno;
	}
	public int getEnq_requird_amount() {
		return enq_requird_amount;
	}
	public void setEnq_requird_amount(int enq_requird_amount) {
		this.enq_requird_amount = enq_requird_amount;
	}
	public int getEnq_age() {
		return enq_age;
	}
	public void setEnq_age(int enq_age) {
		this.enq_age = enq_age;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "EnquiryDetails [enq_id=" + enq_id + ", enqpancardno=" + enqpancardno + ", enq_name=" + enq_name
				+ ", enq_mobno=" + enq_mobno + ", enq_requird_amount=" + enq_requird_amount + ", enq_age=" + enq_age
				+ ", electronic_product_name=" + electronic_product_name + ", status=" + status + "]";
	}
	public String getElectronic_product_name() {
		return electronic_product_name;
	}
	public void setElectronic_product_name(String electronic_product_name) {
		this.electronic_product_name = electronic_product_name;
	}
	
	

}
