import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SPINNER_TIMEOUT } from '../../constants/timeout.constants';
import { LoginAccountDto } from '../../models/login-account.dto';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router,
              private readonly spinner: NgxSpinnerService, private readonly authService: AuthService,
              private readonly alertService: AlertService) {
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

    const loginAccount = new LoginAccountDto(
      this.signInForm.get('email')?.value,
      this.signInForm.get('password')?.value
    );

    this.authService.login(loginAccount).subscribe({
      next: (res) => {
        this.router.navigate(['home']);
        this.alertService.info(`Congratulation ${ res.firstName }, you have just logged in!`);
      }
    });

  }

  registerRedirect(pathRedirectTo: string) {
    this.router.navigate([pathRedirectTo]).then(() => this.spinner.show());
  }
}
