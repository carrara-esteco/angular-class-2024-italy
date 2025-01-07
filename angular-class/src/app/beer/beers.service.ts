import { Beer } from './beer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  public getBeers(): Beer[] {
    return [
      {
        name: 'Tre orsi',
        style: 'Oatmeal stout',
        date: 1733219877202,
        abv: 4.3,
        quantity: 12,
        series: 'commonwealth'
      },
      {
        name: 'Spazzacamino',
        style: 'Extra stout',
        date: 0,
        abv: 6.3,
        quantity: 11,
        series: 'commonwealth'
      }
    ];
  }
}
