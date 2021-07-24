import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateform:FormGroup;
  constructor(private location:Location,private common:CommonService,private fb:FormBuilder) { }

  ngOnInit(): void {
   this.updateform=this.fb.group({
     id:[],
    enqpancardno:[''],
    enq_name:[''],
    enq_mobno:[''],
    enq_requird_amount:[''],
    enq_age:[''],
    electronic_product_name:[''],
    status:[''],
    email:[''],
   verifybyre:['false']

   });
  this.getupdatedata();

  }
  getupdatedata(){
  let enq:any=this.location.getState();
   console.log(enq);
   console.log(enq.verifybyre);
   

   this.updateform.get('id').setValue(enq.id);
   this.updateform.get('enqpancardno').setValue(enq.enqpancardno);
   this.updateform.get('enq_name').setValue(enq.enq_name);
   this.updateform.get('enq_mobno').setValue(enq.enq_mobno);
   this.updateform.get('enq_requird_amount').setValue(enq.enq_requird_amount);
   this.updateform.get('enq_age').setValue(enq.enq_age);
   this.updateform.get('electronic_product_name').setValue(enq.electronic_product_name);
   this.updateform.get('status').setValue(enq.status);
   this.updateform.get('email').setValue(enq.email);
   this.updateform.get('verifybyre').setValue(enq.verifybyre);


}
onLoginSubmit()
{
this.common.enquiryupdatedata(this.updateform.value).subscribe();
}
}
