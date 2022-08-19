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
  lastAddedMovie: MovieInterface | null;
  lastChosenMovie: MovieInterface | null;
  lastDeletedMovie: MovieInterface | null;
}

export const initialState: State = {
  collection: [],
  activeMovieId: null,
  lastAddedMovie: null,
  lastChosenMovie: null,
  lastDeletedMovie: null
};

export const reducer = createReducer(
  initialState,
  ////// PAGE Reducers
  on(MoviePageActions.clearSelectedMovie, MoviePageActions.enter, (state) => {
    return {
      ...state,
      activeMovieId: null
    };
  }),
  on(MoviePageActions.selectMovie, (state, action) => {
    console.log(action.movieId)
      return {
        ...state,
        activeMovieId: action.movieId
      };
    }
  ),
  on(MoviePageActions.enter, (state) => {
    return {
      ...state
    };
  }),
  ////// API Reducers
  on(MovieApiActions.movieLoaded, (state, action) => {
    console.log(state);
    return {
      ...state,
      collection: action.movies
    };
  }),
  on(MovieApiActions.movieCreated, (state, action) => {
    return {
      ...state,
      collection: createMovie(state.collection, action.movie),
      lastAddedMovie: action.movie
    };
  }),
  on(MovieApiActions.movieUpdated, (state, action) => {
    return {
      ...state,
      collection: updateMovie(state.collection, action.movie)
    };
  }),
  on(MovieApiActions.movieDeleted, (state, action) => {
    return {
      ...state,
      collection: deleteMovie(state.collection, action.movie._id),
      lastDeletedMovie: action.movie
    };
  })
);

