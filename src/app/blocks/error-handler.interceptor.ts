import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private readonly alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: () => null,
        error: (error: HttpErrorResponse) => {
          if (!(error.status === 401 && (error.message === ''))) {
            this.alertService.error(error.message);
          }
        }
      })
    );
  }

}
