import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from './home.route';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([HOME_ROUTE]),
    CommonModule,
    TranslateModule,
    MatButtonModule
  ]
})
export class HomeModule {
}
