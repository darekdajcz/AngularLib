import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SPINNER_TIMEOUT } from '../../constants/timeout.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router,
              private readonly spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    setTimeout(() => this.spinner.hide(), SPINNER_TIMEOUT);
  }

  signIn() {
    if (this.signInForm.invalid) {
      return;
    }
    console.log(this.signInForm.get('email'));
    console.log(this.signInForm.get('password'));
  }

  registerRedirect(pathRedirectTo: string) {
    this.router.navigate([pathRedirectTo]).then(() => this.spinner.show());
  }
}
