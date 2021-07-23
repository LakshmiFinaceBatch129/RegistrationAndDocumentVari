import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { EmployeeModule } from './module/employee/employee.module';
import { InventoryModule } from './module/inventory/inventory.module';
import {OperationalexecutiveModule} from './module/operationalexecutive/operationalexecutive.module';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path: 'inventory', loadChildren: () => InventoryModule},
      {path: 'operationalexecutive', loadChildren: () => OperationalexecutiveModule},
      {path: 'relationexcutive',loadChildren:()=> RelationexecutiveModule}
    ]
  },
  // {
  //   path: "Admin",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:
  //         "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
  //     }
  //   ]
  // },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
