import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Beer } from '../beer/beer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getBeers(): Observable<Beer[]> {
    return of([{
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
    ]).pipe(delay(1000));
  }
}
