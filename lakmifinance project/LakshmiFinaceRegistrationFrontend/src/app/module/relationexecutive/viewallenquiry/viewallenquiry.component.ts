import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from '../../operationalexecutive/model/enquiry.model';
import { CommonserviceService } from '../../service/commonservice.service';
import { ReService } from '../re.service';

@Component({
  selector: 'app-viewallenquiry',
  templateUrl: './viewallenquiry.component.html',
  styleUrls: ['./viewallenquiry.component.scss']
})
export class ViewallenquiryComponent implements OnInit {

  e : Enquiry[];
  constructor(private s : ReService , private router : Router) { }

  ngOnInit() {
    this.getEnquiry();
  }

  getEnquiry(){
    this.s.getAllEnquiry().subscribe(rs => {
      this.e = rs;
      console.log(this.e);
    })
  }

  approve(temp){
         
          this.router.navigate(['role/relationexcutive/customer'],{ state: temp})

          
  }

}
