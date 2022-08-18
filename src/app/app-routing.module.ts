import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { errorRoute } from './layouts/error/error.route';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      navbarRoute, ...errorRoute
    ], { enableTracing: false }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
