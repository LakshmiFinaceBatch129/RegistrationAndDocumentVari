import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from '../../operationalexecutive/model/enquiry.model';
import { ReService } from '../re.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.scss']
})
export class CustomerRegComponent implements OnInit {

 
  constructor(private fb:FormBuilder, private re:ReService, private router:ActivatedRoute) { 
   
    
  }
  enq:Enquiry;
  registrationform:any;
  ngOnInit() {
    this.enq=history.state;
    console.log(this.enq);
    this.getregistrationform()
    electronic_product_name: "washing machine"
email: "pandu@gmail.com"
enq_age: 30
enq_id: 5
enq_mobno: "8788689894"
enq_name: "pandu123"
enq_requird_amount: 60000
enqpancardno: "ABCD1235A"
navigationId: 3
status: "eligible"
    this.registrationform.get('customerPancardNo').setValue(this.enq.enqpancardno);
    this.registrationform.get('customerLoanAmount').setValue(this.enq.enq_requird_amount);
    this.registrationform.get('user').get('email').setValue(this.enq.email);
    this.registrationform.get('user').get('mobile').setValue(this.enq.enq_mobno);
    this.registrationform.get('user').get('email').setValue(this.enq.email);
    this.registrationform.get('user').get('firstname').setValue(this.enq.enq_name);
    this.getElectronicItem().get('productName').setValue(this.enq.electronic_product_name);
  }
  getregistrationform(){
    this.registrationform=this.fb.group({
      
      customerLoanAmount:[''],
	    tenure:[''],
  	  customerPancardNo:[''],
      customerAdhardNo:[''],
      customerLoanType:[''],
      user:this.fb.group({
        username:[''],
        password:[''],
        firstname:[''],
        lastname :[''],
        email :[''],
        mobile:[''],
        dob:[''],
        gender:[''],
        address:this.fb.group({
          loaclHouseNo:[''],
          localArea:[''],
          localLandmark:[''],
          localCity:[''],
          localState:[''],
          permanantHouseNo:[''],
          permanantArea:[''],
          permanantLandmark:[''],
          permanatcity:[''],
          permanatState:[''],
          country:[''],
          
        }),
        
      }),
      electronicItem:this.fb.array([this.getElectronicItem()]),
      bank:this.fb.array([this.getBank()]),
      guarante:this.fb.array([this.getGuarantee()]),
      loandetails:this.fb.array([this.getLoanDetils()])
    })

  }
  getElectronicItem(){
    return this.fb.group({
      productCompany:[''],
      productName:[''],
      productPrice:[''],
      dealerName:['']
    })
  }
  addProduct(){
    this.ElectronicItemArray.push(this.getElectronicItem());
  }
  removeProduct(index){
    this.ElectronicItemArray.removeAt(index);
  }
  get ElectronicItemArray(){
    return <FormArray>this.registrationform.get('electronicItem')
  }
  getBank(){
    return this.fb.group({
      bankName:[''],
      accountNumber:[''],
      accountHolderName:[''],
      bankIfsc:[''],
      bankMicr:[''],
      bankAddress:[''],

    })
  }
  addBank(){
    this.BankArray.push(this.getBank());
  }
  removeBank(index){
    this.BankArray.removeAt(index);
  }
  get BankArray(){
    return <FormArray>this.registrationform.get('bank')
  }
  getGuarantee(){
    return this.fb.group({
      guaranterNmae:[''],
      guaranterAddress:[''],
      guaranterRelationWithcustomer:[''],
      guranterMobileNo:[''],
      addharCardNo:[''],
      jobdetails:[''],
    })
  }
  addGuaranter(){
    this.BankArray.push(this.getGuarantee());
  }
  removeGuaranter(index){
    this.BankArray.removeAt(index);
  }
  get GuaranteeArray(){
    return <FormArray>this.registrationform.get('guarante')
  }
  getLoanDetils(){
    return this.fb.group({
      previousLoanamount:[''],
	    previousLoanStatus:[''],
	    paidAmount:[''],
      tenure: [''],
    	reaminingAmount:[''],
      bank:this.getBank(),
    })
  }
  addLoanBank(){
    this.LoanBankArray.push(this.getBank());
  }
  removeLoanBank(index){
    this.LoanBankArray.removeAt(index);
  }
  get LoanBankArray(){
    return <FormArray>this.getLoanDetils().controls['bank']
  }
  addLoanDetils(){
    this.LoanDetilsArray.push(this.getLoanDetils());
  }
  removeLoanDetils(index){
    this.LoanDetilsArray.removeAt(index);
  }
  get LoanDetilsArray(){
    return <FormArray>this.registrationform.get('loandetails')
  }
  onclick(){
    console.log(this.registrationform.value);
    this.re.addCustomer(this.registrationform.value).subscribe(customer=>{
      console.log(customer);
    }
      );
  }

}
