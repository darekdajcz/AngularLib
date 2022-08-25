import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AccountInterface } from '../models/account.interface';
import { RegisterAccountDto } from '../models/register-account.dto';
import { LoginAccountDto } from '../models/login-account.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private resourceUrl = `${ SERVER_API_URL }/account`;

  constructor(private readonly http: HttpClient) {
  }

  private _accountData$ = new BehaviorSubject<AccountInterface | null>(null);

  get accountData$(): Observable<AccountInterface | null> {
    return this._accountData$.asObservable();
  }

  set accountData(accountData: AccountInterface | null) {
    this._accountData$.next(accountData);
  }

  getAccountById(accountId: string): Observable<AccountInterface> {
    return this.http.get<AccountInterface>(`this.resourceUrl${ accountId }`)
      .pipe(tap((account) => this.accountData = account));
  }

  login = (loginAccount: LoginAccountDto): Observable<AccountInterface>  =>
     this.http.post<AccountInterface>(`${this.resourceUrl}/login`, loginAccount)


  registerAccount = (account: RegisterAccountDto): Observable<AccountInterface> =>
    this.http.post<AccountInterface>(this.resourceUrl, account);

  deleteaccountById = (accountId: string): Observable<AccountInterface> => {
    const accountParams = new HttpParams()
      .set('accountId', accountId);
    return this.http.delete<AccountInterface>(this.resourceUrl, { params: accountParams });
  };

  updateAccount = (accountRequest: RegisterAccountDto, accountId: string): Observable<AccountInterface> => {
    const accountParams = new HttpParams()
      .set('accountId', accountId);
    return this.http.put<AccountInterface>(this.resourceUrl, accountRequest, { params: accountParams });
  };
}
