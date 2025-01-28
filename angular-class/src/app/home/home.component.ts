import { Component } from '@angular/core';
import { Beer } from '../beer/beer';
import { BeerComponent } from '../beer/beer.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectBeers } from '../state/beers.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BeerComponent,
    AsyncPipe
  ],
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  beers$: Observable<Beer[]>;

  constructor(private readonly store: Store) {
    this.beers$ = this.store.select(selectBeers);
  }

  public onBeerFinished(beerName: string): void {
    console.log(`Hai finito le ${beerName}. Imbriago`);
  }
}
