import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnquiryComponent
  ],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnquiryModule { }
