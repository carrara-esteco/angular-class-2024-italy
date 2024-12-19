import { BeersService } from './beers.service';
import { Beer } from './beer';

describe('BeerService', () => {

  describe('getBeers', () => {

    let beers: Beer[];

    beforeEach(() => {
      const beerService = new BeersService();
      beers = beerService.getBeers();
    });

    it('should return 2 items in the beer array', () => {
      expect(beers.length).toEqual(2);
    });

    it('should have all items with a positive quantity', () => {
      beers.forEach(current => {
        expect(current.quantity).toBeGreaterThan(0);
      });
    });

  });

});
