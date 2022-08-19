import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule } from '@angular/router';
import { moviesRoute } from './movies.route';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormModule } from '../../shared/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CreateMovieFormComponent } from './components/create-movie-form/create-movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { TotalAmountPanelComponent } from './components/total-amount-panel/total-amount-panel.component';


@NgModule({
  declarations: [
    MoviesComponent,
    CreateMovieFormComponent,
    MovieListComponent,
    TotalAmountPanelComponent
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
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MoviesModule {
}
