import { Controller, Get, Param } from '@nestjs/common';

import restaurants, { Restaurant } from '../../restaurants';

@Controller('restaurants')
export class RestaurantsController {
  constructor() { }

  @Get()
  async index(): Promise<Restaurant[]> {
    return restaurants;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Restaurant> {
    return restaurants.find((restaurant) => restaurant.id === parseInt(id));
  }
}
