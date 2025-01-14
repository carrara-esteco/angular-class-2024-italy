import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Beer } from '../beer/beer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  createDb() {
    const beers: Beer[] = [
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
    return {beers};
  }
}
