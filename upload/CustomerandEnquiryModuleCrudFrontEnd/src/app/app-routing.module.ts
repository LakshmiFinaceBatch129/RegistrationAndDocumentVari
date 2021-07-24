import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdisplayComponent } from './customerdisplay/customerdisplay.component';
import { DisplayComponent } from './display/display.component';
import { EnquiryComponent } from './enquiry/enquiry/enquiry.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{
  path:'',redirectTo:'enquiry', pathMatch:'full'
},
{
path:'enquiry', component:EnquiryComponent
},
{
  path:'enquiry/display',component:DisplayComponent
},
{
  path:'update',component:UpdateComponent
},
{
  path:'enquiry/register',component:RegisterComponent
},
{
  path:'customer/display',component:CustomerdisplayComponent
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

