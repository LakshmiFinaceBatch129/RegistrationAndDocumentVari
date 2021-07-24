package com.crud.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String loaclHouseNo;
	private String localArea;
	private String localLandmark;
	private String localCity;
	private String permanantHouseNo;
	private String permanantArea;
	private String permanantLandmark;
	private String permanantcity;
	private String country;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLoaclHouseNo() {
		return loaclHouseNo;
	}
	public void setLoaclHouseNo(String loaclHouseNo) {
		this.loaclHouseNo = loaclHouseNo;
	}
	public String getLocalArea() {
		return localArea;
	}
	public void setLocalArea(String localArea) {
		this.localArea = localArea;
	}
	public String getLocalLandmark() {
		return localLandmark;
	}
	public void setLocalLandmark(String localLandmark) {
		this.localLandmark = localLandmark;
	}
	public String getLocalCity() {
		return localCity;
	}
	public void setLocalCity(String localCity) {
		this.localCity = localCity;
	}
	public String getPermanantHouseNo() {
		return permanantHouseNo;
	}
	public void setPermanantHouseNo(String permanantHouseNo) {
		this.permanantHouseNo = permanantHouseNo;
	}
	public String getPermanantArea() {
		return permanantArea;
	}
	public void setPermanantArea(String permanantArea) {
		this.permanantArea = permanantArea;
	}
	public String getPermanantLandmark() {
		return permanantLandmark;
	}
	public void setPermanantLandmark(String permanantLandmark) {
		this.permanantLandmark = permanantLandmark;
	}
	public String getPermanantcity() {
		return permanantcity;
	}
	public void setPermanantcity(String permanantcity) {
		this.permanantcity = permanantcity;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}

}
