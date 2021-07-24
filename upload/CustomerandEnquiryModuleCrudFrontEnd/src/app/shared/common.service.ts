import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnquiryDetails } from '../model/enquiry-details';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string="http://localhost:9999/enquiry";
  constructor(private http:HttpClient) { }

  enquirysave(enquiry:EnquiryDetails):Observable<EnquiryDetails>
  {
    return this.http.post<EnquiryDetails>(this.url + "/postdata", enquiry);
    
  }
  enquirygetall():Observable<EnquiryDetails[]>
  {
    return this.http.get<EnquiryDetails[]>(this.url + "/getalldata");
    
  }
  enquiryupdatedata(enquiry:EnquiryDetails):Observable<EnquiryDetails>
  {
    return this.http.put<EnquiryDetails>(this.url + "/updatedata/"+enquiry.id,enquiry);
    
  }
}
