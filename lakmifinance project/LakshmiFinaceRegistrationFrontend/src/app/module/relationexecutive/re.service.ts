
import { Enquiry } from './../operationalexecutive/model/enquiry.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './model/customer';


@Injectable({
  providedIn: 'root'
})
export class ReService {

  customer:Customer = {

    customerId:null,
    customerName:"",
    customerMobileNo:"",
    customerLoanAmount:null,
    customerAge : "",
    customerdDateOfBirth: "",
    customerEmail: "",
    customerPancardNo:"",
    address:{
      addressId:null,
      loaclHouseNo:"",
      localArea:"",
      localLandmark:"",
      localCity:{
        cityId:null,
    cityname:"",
    citypincode:null,
    state:{
      stateId:null,
      stateName:"",
    }
      },
      permanantHouseNo:"",
      permanantArea:"",
      permanantLandmark:"",
      permanantcity:{
        cityId:null,
    cityname:"",
    citypincode:null,
    state:{
      stateId:null,
      stateName:"",
      
    }
      },
      country:{
        countryId:null,
        countryName:""
      }
    },
    vehical:{
      vehicalId:null,
      modelNo:"",
      dealer:"",
      price:"",
      onRoadPrice:""
    },
    bank:{
      bankId:null,
      bankName:"",
      accountNumber:null,
      accountHolderName:"",
      bankIfsc:"",
      bankMicr:"",
      bankAddress:""
    },
    guaranter:{
      guaranterId:null,
    guaranterNmae:"",
    guaranterAddress:"",
    guaranterRelationWithcustomer:"",
    guranterMobileNo:null,
    addharCardNo:null,
    jobdetails:""
    },
    loandetails:{
      previousloanId:null,
    previousLoanamount:null,
    previousLoanStatus:"",
    tenure:null,
    paidAmount:null,
    reaminingAmount:null,
    bank:{
      bankId:null,
      bankName:"",
      accountNumber:null,
      accountHolderName:"",
      bankIfsc:"",
      bankMicr:"",
      bankAddress:""
      
    }
    }
  }



   enqInsert="http://localhost:8080/re/addEnquiry";
   url = "http://localhost:8080/relationshipExecutive/";
   AddCustomerUrl="http://localhost:8083/re/set";

  constructor(private http:HttpClient) { }
  re:any;
  getre(id){
    this.re=this.http.get(this.url+"byuserid/"+id);
    console.log(this.re);
    return this.re;
  }
  addEnquiry(enquiry:Enquiry){
    return this.http.post(this.url+"/addenquiry",enquiry);
  }
  
  getAllEnquiry(){
  return this.http.get<Enquiry[]>(this.url+"/getenquiry");
  }
  addCustomer(customer:any){
    return this.http.post(this.url+"addcustomer",customer);
  }
  getcustomers(){
    return this.http.get<Customer[]>(this.url+"getcustomer");
  }
}
