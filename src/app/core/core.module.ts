import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fontAwesomeIco } from "./font-awesome-icons/font-awesome-icons";
import locales from '@angular/common/locales/pl'
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandlerInterceptor } from "../blocks/error-handler.interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'pl'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(fontAwesomeLib: FaIconLibrary) {
    registerLocaleData(locales)
    fontAwesomeLib.addIcons(...fontAwesomeIco)
  }
}
