import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsServices: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsServices.finadAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });

    return this.carsServices.finaOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }

  @Delete()
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });

    return {
      method: 'delete',
      id,
    };
  }
}
