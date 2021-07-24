import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryDetails } from '../model/enquiry-details';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  allenquiry:EnquiryDetails[];
  constructor(private common:CommonService,private route:Router) { }

  ngOnInit(): void {
    this.common.enquirygetall().subscribe(data=>{this.allenquiry=data;})
    console.log(this.allenquiry);
    
  }

}
