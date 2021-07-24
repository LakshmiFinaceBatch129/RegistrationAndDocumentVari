import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { CustomerserviceService } from '../shared/customerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerform: FormGroup;
  constructor(private fb: FormBuilder, private common: CustomerserviceService) { }

  ngOnInit(): void {
    this.customerform = this.fb.group({
      customerLoanAmount: [''],
      customerLoanType: [''],
      tenure: [''],
      customerAge: [''],
      customerPancardNo: [''],
      customerAdhardNo: [''],
      verifybyoe: ['false'],
      user: this.fb.group({
        username: [''],
        password: [''],
        role: [''],
        firstname: [''],
        lastname: [''],
        email: [''],
        mobile: [''],
        dob: [''],
        gender: [''],
        address: this.fb.group({
          loaclHouseNo: [''],
          localArea: [''],
          localLandmark: [''],
          localCity: [''],
          permanantHouseNo: [''],
          permanantArea: [''],
          permanantLandmark: [''],
          permanantcity: [''],
          country: ['']
        })
      }),
      electronicProduct: this.fb.array([
        this.electronicproduct()
         ]),
      bank:this.fb.array([
        this.bank()
    ]),
    guaranter: this.fb.array([
      this.guaranterdetails()
    ]),
    loandetails: this.fb.array([
        this.previousloandetails()
      ])

    })

  }

  electronicproduct()
  {
    return this.fb.group({
      productCompany: [''],
      productName: [''],
      productPrice: [''],
      dealerName: ['']
       })
  }
  bank()
  {
return this.fb.group({
  bankName: [''],
  accountNumber: [''],
  accountHolderName: [''],
  bankIfsc: [''],
  bankMicr: [''],
  bankAddress: ['']
  })
  }

  guaranterdetails()
  {
return  this.fb.group({
  guaranterName: [''],
  guaranterAddress: [''],
  guaranterRelationWithcustomer: [''],
  guranterMobileNo: [''],
  addharCardNo: [''],
  pancardno: [''],
  jobdetails: ['']
  })
  }

  previousloandetails()
  {
    return  this.fb.group({
      previousLoanamount: [''],
      previousLoanStatus: [''],
        tenure: [''],
        paidAmount: [''],
        reaminingAmount: [''],
       bank: this.fb.array([
         this.loandetailsbank()
       ])
      })
  }
  loandetailsbank(){
    return this.fb.group({
      bankName: [''],
      accountNumber: [''],
      accountHolderName: [''],
      bankIfsc: [''],
      bankMicr: [''],
      bankAddress: ['']
    })
  }

  onSubmit() {
    console.log("flow reach at onsubmit");
    this.common.customersave(this.customerform.value).subscribe(data => {
      console.log(data);
    })

    console.log(this.customerform.value);
    
  }

//.......for electronicproduct details
  addelectronicproduct() {
    const control = <FormArray>this.customerform.controls['electronicProduct'];
    control.push(this. electronicproduct());
}

removeelectronicproduct(i: number) {
    const control = <FormArray>this.customerform.controls['electronicProduct'];
    control.removeAt(i);
}
//.......for bankdetails details
addbankdetails()
{
  const control = <FormArray>this.customerform.controls['bank'];
  control.push(this. bank());
}
removebankdetails(i: number)
{
  const control = <FormArray>this.customerform.controls['bank'];
  control.removeAt(i);
}
//.......for guaranterdetails details
addguaranterdetails(){
  const control = <FormArray>this.customerform.controls['guaranter'];
  control.push(this. guaranterdetails());
}
removeguaranterdetails(i: number)
{
  const control = <FormArray>this.customerform.controls['guaranter'];
  control.removeAt(i);
}
//.......for previousloandetails details
addpreviousloandetails()
{
  const control = <FormArray>this.customerform.controls['loandetails'];
  control.push(this. previousloandetails());
}
removepreviousloandetails(i:number)
{
  const control = <FormArray>this.customerform.controls['loandetails'];
  control.removeAt(i);
}
}
