import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BeerActions } from './beers.actions';
import { map, switchMap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class BeersEffects {

  private actions$: Actions = inject(Actions);
  private apiService: ApiService = inject(ApiService);


  public loadBeers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BeerActions.loadBeersRequest),
      switchMap(() => this.apiService.getBeers().pipe(
        map(beers => BeerActions.loadBeersResponse({beers}))
      ))
    );
  });


}
