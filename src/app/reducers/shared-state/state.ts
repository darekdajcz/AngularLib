import * as fromMovies from '../shared-state/movies.reducer';
import { ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

export const FEATURE_KEY = 'shared-movies';

export interface State {
  movies: fromMovies.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromMovies.reducer,
};
export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })]
})
export class SharedStateMovieModule {
}

export const selectSharedMovieState = createFeatureSelector<State>(FEATURE_KEY);
