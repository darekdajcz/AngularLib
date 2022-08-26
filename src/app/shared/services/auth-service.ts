import { Injectable } from '@angular/core';
import { LoginAccountDto } from '../models/login-account.dto';
import { AccountInterface } from '../models/account.interface';
import { AccountService } from './account.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private readonly accountService: AccountService) {
  }


  login(loginModel: LoginAccountDto): Observable<AccountInterface> {
    return this.accountService.login(loginModel).pipe(
      tap((res: any) => console.log(res.token))
    );
  }

}
