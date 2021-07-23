// import { Score } from './../operationalexecutive/model/score';
// import { HeaderComponent } from './../../components/header/header.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './login.component';
// import { Enquiry } from '../operationalexecutive/model/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/user";
  // statusUrl = "http://localhost:8083/oe/getStatus";
  // singleUrl = "http://localhost:8083/oe/getEnquiry";
  // updateUrl = "http://localhost:8083/oe/updateEnquiry";
  // cibilUrl="http://localhost:8088/checkcibil"
  constructor(private http : HttpClient) { }

  // e : Enquiry = {
  //   enq_id : null,
  //   enqpancardno : '',
  //   enq_name : '',
  //   enq_mobno : '',
  //   enq_requird_amount :null ,
  //   enq_age : null,
  //   enq_vehicle_name : '',
  //   email : '',
  //   status : ''


  // }

 getuser(username,password){
    return this.http.get<user>(`${this.url+"/"+username+"/"+password}`);

  }
  // getStatus(status : string){
  //   return this.http.get<Enquiry[]>(`${this.statusUrl}` + '/' + `{status}`);
  // }

  // getEnquiry(id){
  //   return this.http.get<Enquiry>(this.singleUrl + '/' + id);
  // }

  // updateEnquiry(e : Enquiry){
  //   return this.http.put(this.updateUrl,e);
  // }
  // checkCibil(pan:string):Observable<Score>
  // {
  //    return this.http.get<Score>(this.cibilUrl +'/'+pan );
  // }
}
