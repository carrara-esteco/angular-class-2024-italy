import { Component, OnDestroy, OnInit } from '@angular/core';
import { Beer } from '../beer/beer';
import { BeersService } from '../beer/beers.service';
import { BeerComponent } from '../beer/beer.component';
import { Observable, of, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BeerComponent,
    AsyncPipe
  ],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  beers$: Observable<Beer[]> = of();

  constructor(private readonly beersService: BeersService) {
  }

  public ngOnInit(): void {
    this.beers$ = this.beersService.getBeers();
  }


  public onBeerFinished(beerName: string): void {
    console.log(`Hai finito le ${beerName}. Imbriago`);
  }
}
