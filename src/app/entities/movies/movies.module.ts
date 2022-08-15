import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from "@angular/router";
import { moviesRoute } from "./movies.route";



@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    RouterModule.forChild(moviesRoute),
    CommonModule
  ]
})
export class MoviesModule { }
