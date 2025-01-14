import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from './beer';
import { DatePipe } from '@angular/common';
import { AbvPipe } from './abv.pipe';

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

  public static readonly EMPTY_BEER: Beer = {
    id: '',
    name: '',
    date: 0,
    abv: 0,
    quantity: 0,
    style: '',
    series: ''
  };

  @Input()
  public beer: Beer = BeerComponent.EMPTY_BEER;

  @Output()
  public finished: EventEmitter<string> = new EventEmitter();

  public drinkOne(): void {
    this.beer.quantity--;
    if (this.beer.quantity === 0) {
      this.finished.emit(this.beer.name);
    }
  }
}
