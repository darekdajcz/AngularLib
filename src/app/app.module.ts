import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatButtonModule} from "@angular/material/button";
import {MainComponent} from "./layouts/main/main.component";
import {RouterModule} from "@angular/router";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {ANGULAR_MAT_DATE_FORMATS} from "./app.constants";
import {appInitializerFactoryConfg} from "./app.functions";
import {HomeModule} from "./home/home.module";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MainComponent,
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    RouterModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    {provide: MAT_DATE_FORMATS, useValue: ANGULAR_MAT_DATE_FORMATS},
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactoryConfg,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
