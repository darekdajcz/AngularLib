import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SPINNER_TIMEOUT } from '../../constants/timeout.constants';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  email = new FormControl();

  constructor(private readonly spinner: NgxSpinnerService, private readonly router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => this.spinner.hide(), SPINNER_TIMEOUT);
  }

  resetPassword() {

  }

  redirect(login: string) {
    this.router.navigate([login]).then(() => this.spinner.show());

  }
}
