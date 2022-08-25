import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SPINNER_TIMEOUT } from '../../constants/timeout.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { RegisterAccountDto } from '../../models/register-account.dto';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private readonly spinner: NgxSpinnerService, private readonly fb: FormBuilder,
              private readonly router: Router, private readonly accountService: AccountService,
              private readonly alertService: AlertService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    setTimeout(() => this.spinner.hide(), SPINNER_TIMEOUT);
  }

  register() {
    const registerAccount = new RegisterAccountDto(
      this.registerForm.get('firstName')?.value,
      this.registerForm.get('lastName')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value,
    )
    this.accountService.registerAccount(registerAccount).subscribe((res) =>
      this.alertService.info(`Congratulation ${res.firstName}, you just registered an account with us!`))
  }

  redirect(register: string) {
    this.router.navigate([register]).then(()=> this.spinner.show())
  }
}
