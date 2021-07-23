import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Enquiry } from '../model/enquiry.model';
import { OeService } from '../oe.service';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.scss']
})
export class ViewenquiryComponent implements OnInit {

  e : Enquiry[];
  
  constructor(private insertEnquiry : OeService ) { }

  id : any;
  result : any;
  status = false;
  ngOnInit() {
   
   
    this.getEnquiry();
  }

  getEnquiry(){
    this.insertEnquiry.getAllEnquiry().subscribe(rs => {
      this.e = rs;
      console.log(this.e);
    })
  }

  

}
