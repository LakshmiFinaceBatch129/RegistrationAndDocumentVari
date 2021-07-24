import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  url:string="http://localhost:9999/customer";
  constructor(private http:HttpClient) { }

  customersave(customer:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(this.url + "/postdata", customer);
    
  }
  customergetall():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.url + "/getalldata");
    
  }
  customerupdatedata(customer:Customer):Observable<Customer>
  {
    return this.http.put<Customer>(this.url + "/updatedata/"+customer.id,customer);
    
  }
}
