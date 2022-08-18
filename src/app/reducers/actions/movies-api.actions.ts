import { createAction, props } from '@ngrx/store';
import { MovieInterface } from '../../entities/movies/dto/movie.response';

export const movieLoaded = createAction(
  '[Movies API] Movies Loaded Success',
  props<{ movies: MovieInterface[] }>()
);

export const movieCreated = createAction(
  '[Movies API] Movies Created',
  props<{ movies: MovieInterface }>()
);

export const movieUpdated = createAction(
  '[Movies API] Movies Updated',
  props<{ movies: MovieInterface }>()
);

export const movieDeleted = createAction(
  '[Movies API] Movies Deleted',
  props<{ movies: MovieInterface }>()
);
