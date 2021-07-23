import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
const ivnrouting: Routes = [
  {path: 'stock', component: StockComponent},
  {path: 'demo1', component: DemoComponent}

];
@NgModule({
  declarations: [StockComponent, DemoComponent],
  imports: [
    CommonModule, RouterModule.forChild(ivnrouting)

  ]
})
export class InventoryModule { }
