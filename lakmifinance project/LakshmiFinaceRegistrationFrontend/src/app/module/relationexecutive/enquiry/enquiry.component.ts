import { ReService } from './../re.service';
import { Enquiry } from './../../operationalexecutive/model/enquiry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
 enquiry : Enquiry = new Enquiry();
  constructor(private service:ReService) { }

  ngOnInit() {
  }

  onSubmit(){
     this.service.addEnquiry(this.enquiry).subscribe(data=>{
       console.log("data inserted");
     })
  }

}
