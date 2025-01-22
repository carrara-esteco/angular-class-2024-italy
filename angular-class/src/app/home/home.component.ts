import { Component, computed, Signal } from '@angular/core';
import { Beer } from '../beer/beer';
import { BeersService } from '../beer/beers.service';
import { BeerComponent } from '../beer/beer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BeerComponent
  ],
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  beers: Signal<Beer[]>;
  totalBeerQuantity = computed(() => this.beers().reduce((quantity, current) => quantity + current.quantity, 0));

  constructor(private readonly beersService: BeersService) {
    this.beers = this.beersService.beers;
  }

  drinkAll() {
    this.beersService.drinkAll();
  }
}
