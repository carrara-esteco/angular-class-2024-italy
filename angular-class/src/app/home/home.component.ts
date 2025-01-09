import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private readonly beersService: BeersService) {

  }

  public ngOnInit(): void {
    this.beers = this.beersService.getBeers();
  }

  public onBeerFinished(beerName: string): void {
    console.log(`Hai finito le ${beerName}. Imbriago`);
  }
}
