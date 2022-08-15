import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieService } from "./movie.service";
import { MovieResponse } from "./dto/movie.response";
import { finalize } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  panelOpenState = false;
  movies: MovieResponse[] = [];
  movieFormGroup: FormGroup | undefined;

  constructor(private readonly spinner: NgxSpinnerService, private readonly movieService: MovieService,
              private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initFormGroup();
    /** spinner starts on init */
    this.spinner.show().then(() =>
      this.movieService.getAllMovies()
        .pipe(finalize(() => setTimeout(() => this.spinner.hide(), 500)))
        .subscribe({
          next: (res) => {
            this.movies = res;
          }
        }))
  }

  initFormGroup(): void {
    this.movieFormGroup = this.fb.group({
      title: 's',
      amount: 's',
      duration: 's'
    })
  }

  saveMovie() {

  }
}
