import { Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";

export const moviesRoute: Routes = [
  {
    path: '',
    component: MoviesComponent,
    // resolve: {
    //
    // },
    // data: {
    //   authorities: [],
    //   pageTitle: 'Ngrx Tutorial'
    // },
    // canActivate: []
  }
]
