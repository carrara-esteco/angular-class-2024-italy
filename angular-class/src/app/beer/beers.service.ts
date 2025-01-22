import { Beer } from './beer';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private beerValues: Beer[] = [
    {
      id: '1',
      name: 'Tre orsi',
      style: 'Oatmeal stout',
      date: 1733219877202,
      abv: 4.3,
      quantity: 12,
      series: 'commonwealth'
    },
    {
      id: '2',
      name: 'Spazzacamino',
      style: 'Extra stout',
      date: 0,
      abv: 6.3,
      quantity: 11,
      series: 'commonwealth'
    }
  ];

  public beers = signal(this.beerValues);

  constructor() {
  }

  addBeer(newBeer: Beer) {
    // implement me!
  }

  drinkOne(index: number) {
    this.beers.update(oldBeers =>
      oldBeers.map(
        (currentBeer, currentIndex) => currentIndex !== index ? currentBeer : {
          ...currentBeer,
          quantity: currentBeer.quantity - 1
        }));
  }

  drinkAll() {
    this.beers.update(oldBeers =>
      oldBeers.map(currentBeer => ({...currentBeer, quantity: 0}))
    );
  }
}
