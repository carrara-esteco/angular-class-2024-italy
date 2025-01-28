import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BeersState } from './beers.state';

export const selectBeersFeature = createFeatureSelector<BeersState>('beers');

export const selectBeers = createSelector(
  selectBeersFeature,
  (beerState: BeersState) => beerState.beers
);
