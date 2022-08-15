import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { AlertComponent } from "./alert.component";
import { FontAwesomeTestingModule } from "@fortawesome/angular-fontawesome/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgbAlertModule,
    FontAwesomeModule,
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
