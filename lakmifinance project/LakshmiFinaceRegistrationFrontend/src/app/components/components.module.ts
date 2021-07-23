import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [

    NavbarComponent,
    HeaderComponent,
   
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    
  ]
})
export class ComponentsModule { }
