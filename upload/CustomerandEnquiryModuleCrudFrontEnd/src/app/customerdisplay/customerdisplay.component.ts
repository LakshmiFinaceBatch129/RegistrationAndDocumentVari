import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerserviceService } from '../shared/customerservice.service';

@Component({
  selector: 'app-customerdisplay',
  templateUrl: './customerdisplay.component.html',
  styleUrls: ['./customerdisplay.component.css']
})
export class CustomerdisplayComponent implements OnInit {
customerdata:Customer[];
  constructor(private common:CustomerserviceService) { }

  ngOnInit(): void {
    this.common.customergetall().subscribe(data=>{this.customerdata=data;
      console.log(data);
      
    })
  }

}
