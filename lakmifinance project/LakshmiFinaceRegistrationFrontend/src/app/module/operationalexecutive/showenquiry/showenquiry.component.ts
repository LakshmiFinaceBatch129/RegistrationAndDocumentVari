import { Score } from './../model/score';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from '../../service/commonservice.service';
import { OeService } from '../oe.service';

@Component({
  selector: 'app-showenquiry',
  templateUrl: './showenquiry.component.html',
  styleUrls: ['./showenquiry.component.scss']
})
export class ShowenquiryComponent implements OnInit {

  constructor(private router : ActivatedRoute , private oe : OeService, private common:CommonserviceService) { }

  id : number;
  enquiry:any;
  enquiryDetails : any = [];
  cibilscore:any;
  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params);
    this.id = params['enq_id'];
    console.log(this.id);
    this.oe.getEnquiry(this.id).subscribe(rs => {
      this.enquiry = rs;
      console.log(this.enquiry);
    })

    })
  }

  updateEnquiry(){
    console.log(this.enquiry);
    this.oe.updateEnquiry(this.enquiry).subscribe(rs => {
        this.enquiryDetails = rs;
        console.log(this.enquiryDetails);
    })
    this.enquiry=null;
  }
  getCibil(pan:string){
    this.oe.checkCibil(pan).subscribe(data=> {
      this.cibilscore=data;
      console.log(this.cibilscore);
    });
    
  }

}
