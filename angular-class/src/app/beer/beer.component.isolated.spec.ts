import { BeerComponent } from './beer.component';
import { Beer } from './beer';

describe('BeerComponent', () => {

  describe('drinkOne', () => {

    it('should decrement the quantity of the item', () => {

      const beerComponent = new BeerComponent();
      beerComponent.beer = { quantity: 12 } as Beer;

      beerComponent.drinkOne();

      expect(beerComponent.beer.quantity).toEqual(11);
    });

  });

});
