import { MovieInterface } from '../../entities/movies/dto/movie.response';
import { createReducer, on } from '@ngrx/store';
import * as MoviePageActions from '../../reducers/actions/movies-page.actions';
import * as MovieApiActions from '../../reducers/actions/movies-api.actions';

const createMovie = (movies: MovieInterface[], movie: MovieInterface) => [...movies, movie];

const updateMovie = (movies: MovieInterface[], changes: MovieInterface) =>
  movies.map((movie) => {
    return movie._id === changes._id ? Object.assign({}, movie, changes) : movie;
  });

const deleteMovie = (movies: MovieInterface[], movieId: string) =>
  movies.filter((movie) => movie._id !== movieId);



export interface State {
  collection: MovieInterface[];
  activeMovieId: string | null;
}

export const initialState: State = {
  collection: [],
  activeMovieId: null
};

export const reducer = createReducer(
  initialState,
  on(MoviePageActions.clearSelectedMovie, MoviePageActions.enter, (state) => {
    return {
      ...state,
      activeMovieId: null
    };
  }),
  on(MoviePageActions.selectMovie, (state, action) => {
      return {
        ...state,
        activeMovieId: action.movieId
      };
    }
  )
);
