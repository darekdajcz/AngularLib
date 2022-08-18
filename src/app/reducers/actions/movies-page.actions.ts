import { createAction, props } from "@ngrx/store";
import { CreateMovieModel } from "../../entities/movies/dto/create-movie.model";

export const enter = createAction('[Movie Page] Enter');
export const selectMovie = createAction(
  '[Movie Page] Select a Movie',
  props<{ movieId: string }>()
);
export const clearSelectedMovie = createAction(
  '[Movie Page] Clear Selected Movie',
);
export const createMovie = createAction(
  '[Movie Page] Create Movie',
  props<{ movie: CreateMovieModel }>()
);
export const updateMovie = createAction(
  '[Movie Page] Update Movie',
  props<{ movieId: string; changes: CreateMovieModel }>()
);
export const deleteMovie = createAction(
  '[Movie Page] Delete Movie',
  props<{ movieId: string }>()
);
