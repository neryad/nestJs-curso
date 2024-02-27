import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brandsseed';

@Injectable()
export class SeedService {
  constructor(
    private carServices: CarsService,
    private brandsServices: BrandsService,
  ) {}
  populateDB() {
    this.brandsServices.fillBrandsData(BRAND_SEED);
    this.carServices.fillCarsData(CARS_SEED);

    return 'Seed Executed';
  }
}
