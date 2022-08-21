import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from './home.route';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
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
