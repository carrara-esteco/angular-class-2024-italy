import { Beer } from '../beer/beer';

export interface BeersState {
  beers: Beer[];
}

export const initialState: BeersState = {
  beers: []
};
