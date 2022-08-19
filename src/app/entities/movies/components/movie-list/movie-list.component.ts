import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieInterface } from '../../dto/movie.response';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies!: MovieInterface[] | null;
  @Output() editMovieEmitter = new EventEmitter<MovieInterface>();
  @Output() deleteMovieEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editMovie(movie: MovieInterface) {
    this.editMovieEmitter.emit(movie);
  }

  deleteMovie(_id: string) {
    this.deleteMovieEmitter.emit(_id);
  }
}
