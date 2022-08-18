import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { customerRoute } from './customer.route';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    RouterModule.forChild(customerRoute),
    CommonModule
  ]
})
export class CustomerModule {

}
