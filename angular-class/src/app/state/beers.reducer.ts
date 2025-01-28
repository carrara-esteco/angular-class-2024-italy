import { createFeature, createReducer, on } from '@ngrx/store';
import { BeersState, initialState } from './beers.state';
import { BeerActions } from './beers.actions';

export const beersReducer = createReducer(
  initialState,
  on(BeerActions.loadBeersResponse, ((currentState, {beers}) =>
    ({...currentState,beers}))),
  on(BeerActions.drinkOne, (currentState: BeersState, {beerId}) => ({
    ...currentState,
    beers: currentState.beers.map(currentBeer => currentBeer.id !== beerId ? currentBeer : {
      ...currentBeer,
      quantity: currentBeer.quantity - 1
    })
  })),
  on(BeerActions.addBeer, (currentState: BeersState, {beer}) => ({
    ...currentState,
    beers: [...currentState.beers, beer]
  }))
);

export const beersFeature = createFeature({name: 'beers', reducer: beersReducer});
