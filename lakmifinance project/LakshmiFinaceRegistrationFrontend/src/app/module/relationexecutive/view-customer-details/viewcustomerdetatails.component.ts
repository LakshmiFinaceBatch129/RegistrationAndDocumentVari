import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReService } from '../re.service';

@Component({
  selector: 'app-viewcustomerdetatails',
  templateUrl: './viewcustomerdetatails.component.html',
  styleUrls: ['./viewcustomerdetatails.component.scss']
})
export class ViewcustomerdetatailsComponent implements OnInit {

  constructor(private res:ReService) { }
  customers:any[]
  ngOnInit() {
    this.getCustomer();
  }
   getCustomer(){
    this.res.getcustomers().subscribe(rs => {
      this.customers= rs;
      console.log(this.customers);
    })
  }

}
