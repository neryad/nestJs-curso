import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsServices: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsServices.finadAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });

    return this.carsServices.finaOneById(id);
  }
}
