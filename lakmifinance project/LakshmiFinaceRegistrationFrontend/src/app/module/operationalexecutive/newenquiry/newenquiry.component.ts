import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../../service/commonservice.service';
import { Enquiry } from '../model/enquiry.model';
import { OeService } from '../oe.service';

@Component({
  selector: 'app-newenquiry',
  templateUrl: './newenquiry.component.html',
  styleUrls: ['./newenquiry.component.scss']
})
export class NewenquiryComponent implements OnInit {

  e : any = [];
  status = '';
  constructor(private oeservice : OeService , private routes : Router) { }

  ngOnInit() {
    this.getEnquiryStatus();
  }

  getEnquiryStatus(){
    this.oeservice.getAllEnquiry().subscribe(rs => {
      this.e = rs;
      console.log(this.e);
    })
  }

  verifyEnquiry(enq_id){
    console.log('from tables : '+enq_id);
      this.routes.navigate(['role/operationalexecutive/show',enq_id]);
  }

}
