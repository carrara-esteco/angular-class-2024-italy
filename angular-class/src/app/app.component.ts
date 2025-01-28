import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { BeerActions } from './state/beers.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = 'Le mie birre';

  constructor(store: Store) {
    store.dispatch(BeerActions.loadBeersRequest());
  }

}
