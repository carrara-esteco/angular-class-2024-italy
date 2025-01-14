import { Beer } from './beer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private httpClient: HttpClient) {
  }

  public getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>('api/beers');
  }

  addBeer(newBeer: Beer) {
    this.httpClient.post('api/beers', newBeer).subscribe();
  }
}
