
import { Enquiry } from './../operationalexecutive/model/enquiry.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../relationexecutive/model/customer';
import { CibilCheck } from './model/CibilCheck';



@Injectable({
  providedIn: 'root'
})
export class OeService {
   url = "http://localhost:8080/operationExecutive/";

  constructor(private http:HttpClient) { }
  oe:any;
  getoe(id){
    this.oe=this.http.get(this.url+"byuserid/"+id);
    console.log(this.oe);
    return this.oe;
  }
  updateEnquiry(enquiry:Enquiry){
    return this.http.put(this.url+this.oe.oeid+"/updateEnquiry",enquiry);
  }  
  getAllEnquiry(){
    return this.http.get<Enquiry[]>(this.url+this.oe.oeid+"/getenquiry");
  }
  getEnquiry(enq_id){
    return this.http.get<Enquiry>(this.url+this.oe.oeid+"/"+enq_id);
  }
  getAllCustomers(){
    return this.http.get<Customer[]>(this.url+this.oe.oeid+"/getcustomers");
  }
  updateCustomer(cus){
    return this.http.put(this.url+this.oe.oeid+"/updatecustomer", cus);
  }
  checkCibil(pan){
    return this.http.get<CibilCheck>(this.url+'checkcibil'+"/"+pan);
  }
// addCustomer(temp:Customer){
//    return this.http.post(,temp);
// }
}
