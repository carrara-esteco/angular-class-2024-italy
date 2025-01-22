import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';
import { Beer } from './beer';
import { DatePipe } from '@angular/common';
import { AbvPipe } from './abv.pipe';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-beer',
  standalone: true,
  imports: [
    DatePipe,
    AbvPipe
  ],
  templateUrl: 'beer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent {

  public index = input.required<number>();
  public beer: Signal<Beer>;

  constructor(private beersService: BeersService) {
    this.beer = computed(() => {
      return this.beersService.beers()[this.index()];
    });
  }

  public drinkOne(): void {
    this.beersService.drinkOne(this.index());
  }
}
