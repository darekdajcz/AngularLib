import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SPINNER_TIMEOUT } from '../../shared/constants/timeout.constants';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private readonly spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show().then(() => setTimeout(() => this.spinner.hide(), SPINNER_TIMEOUT));
  }

}
