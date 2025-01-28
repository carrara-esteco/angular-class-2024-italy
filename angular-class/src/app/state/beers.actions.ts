import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Beer } from '../beer/beer';

export const BeerActions = createActionGroup({
  source: 'Beers',
  events: {
    'load beers request': emptyProps(),
    'load beers response': props<{beers: Beer[]}>(),
    'drink one': props<{ beerId: string }>(),
    'add beer': props<{ beer: Beer }>()
  }
})
