import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FakeBackendService } from './development/fake.backend.service';
import { provideState, provideStore } from '@ngrx/store';
import { beersFeature } from './state/beers.reducer';
import { provideEffects } from '@ngrx/effects';
import { BeersEffects } from './state/beers.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(FakeBackendService)),
    provideStore(),
    provideState(beersFeature),
    provideEffects([BeersEffects])
  ]
};
