import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from "@angular/router";
import { moviesRoute } from "./movies.route";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { FormModule } from "../../shared/form.module";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    RouterModule.forChild(moviesRoute),
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FormModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
