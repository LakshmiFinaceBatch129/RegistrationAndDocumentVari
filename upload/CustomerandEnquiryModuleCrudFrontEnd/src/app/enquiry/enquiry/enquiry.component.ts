import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  enquiryform:any;
  constructor(private fb:FormBuilder,private common:CommonService,private route:Router) { }

  ngOnInit(): void {
  this.enquiryform=this.fb.group({
    enqpancardno:[''],
    enq_name:[''],
    enq_mobno:[''],
    enq_requird_amount:[''],
    enq_age:[''],
    electronic_product_name:[''],
    status:['pending'],
    email:[''],
   verifybyre:['false']


  })
  }
  onLoginSubmit()
  {
    console.log("flow reach at onloginsubmit");
    this.common.enquirysave(this.enquiryform.value).subscribe(data=>{console.log(data); });
  }
}
