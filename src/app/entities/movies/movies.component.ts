import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieService } from "./movie.service";
import { MovieInterface } from "./dto/movie.response";
import { finalize, tap } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateMovieModel } from "./dto/create-movie.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  panelOpenState = false;
  movies: MovieInterface[] = [];
  movieFormGroup!: FormGroup;
  totalAmount = 0;

  constructor(private readonly spinner: NgxSpinnerService, private readonly movieService: MovieService,
              private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initFormGroup();
    /** spinner starts on init */
    this.spinner.show().then(() =>
      this.movieService.getAllMovies()
        .pipe(
          finalize(() => setTimeout(() => this.spinner.hide(), 500)),
          tap((res) => res.forEach((movie) => this.totalAmount += +movie.amount))
        )
        .subscribe({
          next: (res) => {
            this.movies = res;
          }
        }))
  }

  initFormGroup(): void {
    this.movieFormGroup = this.fb.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      duration: ['', Validators.required],
    })
  }

  saveMovie() {
    const movieRequest = new CreateMovieModel(
      this.movieFormGroup.get('title')?.value,
      this.movieFormGroup.get('amount')?.value,
      this.movieFormGroup.get('duration')?.value,
    )
    this.movieService.createMovie(movieRequest).subscribe()
  }
}
