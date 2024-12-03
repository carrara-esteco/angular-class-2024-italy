import { Component } from '@angular/core';
import { BeerComponent } from './beer/beer.component';
import { Beer } from './beer/beer';
import { BeersService } from './beer/beers.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BeerComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  beers: Beer[] = [];

  constructor(private readonly beersService: BeersService) {
    this.beers = this.beersService.getBeers();
  }

  public onBeerFinished(beerName: string): void {
    console.log(`Hai finito le ${beerName}. Imbriago`);
  }
}

