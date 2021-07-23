import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddcityComponent } from './addcity/addcity.component';
const adminrouting: Routes = [
  {path: 'adminbash', component: DashboardComponent},
  {path: 'city', component: AddcityComponent},

];
@NgModule({
  declarations: [DashboardComponent, AddcityComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminrouting)

  ]
})
export class MastermoduleModule { }
