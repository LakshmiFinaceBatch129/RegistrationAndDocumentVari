import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { EnquiryModule } from './enquiry/enquiry.module';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
import { CustomerdisplayComponent } from './customerdisplay/customerdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    UpdateComponent,
    RegisterComponent,
    CustomerdisplayComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EnquiryModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
