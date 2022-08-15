import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { AlertModel, AlertType } from "../components/alert/alert.model";

@Injectable({ providedIn: 'root' })
export class AlertService {
  private readonly alertSubject = new Subject<AlertModel>();
  private readonly defaultId = 'default-alert';

  constructor(private translateService: TranslateService) {
  }

  messagesInfo(code: string, params?: any): string {
    return this.translateService.instant(code, params);
  }

  messagesErrorInfo(code: number, params?: any): string {
    return this.translateService.instant('error.http.' + code, params);
  }

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<AlertModel> {
    return this.alertSubject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, params?: any): void {
    this.alert(new AlertModel({ type: AlertType.Success, message, params }));
  }

  error(message: string, params?: any): void {
    this.alert(new AlertModel({ type: AlertType.Error, message, params }));
  }

  info(message: string, params?: any): void {
    this.alert(new AlertModel({ type: AlertType.Info, message, params }));
  }

  warn(message: string, params?: any): void {
    this.alert(new AlertModel({ type: AlertType.Warning, message, params }));
  }

  // main alert method
  alert(alert: AlertModel): void {
    alert.message = this.translateService.instant(alert.message, alert.params);
    alert.id = alert.id || this.defaultId;
    this.alertSubject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId): void {
    this.alertSubject.next(new AlertModel({ id }));
  }
}
