import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './layouts/main/main.component';
import { RouterModule } from '@angular/router';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ANGULAR_MAT_DATE_FORMATS } from './app.constants';
import { appInitializerFactoryConfg } from './app.functions';
import { HomeModule } from './home/home.module';
import { ErrorComponent } from './layouts/error/error.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EntityModule } from './entities/entity.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from './shared/components/alert/alert.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedStateMovieModule } from './reducers/shared-state/state';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MainComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule,
    NgxSpinnerModule,
    HomeModule,
    BrowserModule,
    HttpClientModule,
    EntityModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    AlertModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    RouterModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    SharedStateMovieModule
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
    { provide: MAT_DATE_FORMATS, useValue: ANGULAR_MAT_DATE_FORMATS },
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
