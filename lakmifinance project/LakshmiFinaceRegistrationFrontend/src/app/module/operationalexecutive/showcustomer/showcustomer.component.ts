import { Component, OnInit } from '@angular/core';
import { OeService } from '../oe.service';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.scss']
})
export class ShowcustomerComponent implements OnInit {

  constructor(private oes:OeService) { }
  customers:any[]
  ngOnInit() {
    this.getCustomer()
  }
  getCustomer(){
    this.oes.getAllCustomers().subscribe(rs => {
      this.customers= rs;
      console.log(this.customers);
    })
  }
  verifyCustomer(customer){
    this.oes.updateCustomer(customer).subscribe(oe=>{
        console.log(oe);
        this.getCustomer()
      })
  }

}
