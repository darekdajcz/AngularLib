import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";

export const customerRoute: Routes = [
  {
    path: '',
    component: CustomerComponent,
    // resolve: {
    //
    // },
    // data: {
    //   authorities: [],
    //   pageTitle: 'Ngrx Tutorial'
    // },
    // canActivate: []
  }
]
