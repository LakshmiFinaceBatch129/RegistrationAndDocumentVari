import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDocumentsComponent } from './customer-documents/customer-documents.component';

import { ViewenquiryComponent } from '../operationalexecutive/viewenquiry/viewenquiry.component';
import { ViewallenquiryComponent } from './viewallenquiry/viewallenquiry.component';
import { ViewcustomerdetatailsComponent } from './view-customer-details/viewcustomerdetatails.component';
import { CustomerRegComponent } from './customer-reg/customer-reg.component';
const rerouting: Routes = [
  {path: 'relogin/:id', component: LoginComponent},
  {path:'view', component: ViewallenquiryComponent},
  {path:'new', component: EnquiryComponent},
  {path:'customer', component:CustomerRegComponent},
  {path:'viewcustomer', component:ViewcustomerdetatailsComponent},
  {path:'docs/:id', component:CustomerDocumentsComponent},
];

@NgModule({
  declarations: [LoginComponent, EnquiryComponent, ViewcustomerdetatailsComponent, CustomerDetailsComponent, CustomerDocumentsComponent,ViewenquiryComponent, ViewallenquiryComponent, CustomerRegComponent],
  imports: [
    CommonModule,RouterModule.forChild(rerouting),FormsModule,ReactiveFormsModule
  ]
})
export class RelationexecutiveModule { }
