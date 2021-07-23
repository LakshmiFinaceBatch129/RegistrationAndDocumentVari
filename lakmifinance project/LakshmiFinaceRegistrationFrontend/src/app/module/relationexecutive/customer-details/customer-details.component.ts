import { Router } from '@angular/router';
import { ReService } from './../re.service';
import { Customer } from './../model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

   cust: Customer = new Customer();

   id:number;

  constructor(private s:ReService,
              private routes:Router) { }

  ngOnInit() {
  }

  addCustomer(temp: Customer){
    this.id=temp.customerId;
    console.log(this.id);
    this.s.addCustomer(temp).subscribe(data=>{
      this.routes.navigate(['docs',this.id]);
    });
    
  }

  docs(id:number){
    this.routes.navigate(['role/relationexcutive/docs',id]);
  }
}
