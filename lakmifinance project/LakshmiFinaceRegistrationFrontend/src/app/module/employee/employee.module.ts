import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
const emprouting: Routes = [
  {path: 'empdash', component: DashboardComponent},
  {path: 'demo', component: DemoComponent},


];
@NgModule({
  declarations: [DashboardComponent, DemoComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting)
  ]
})
export class EmployeeModule { }
