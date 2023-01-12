import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class ProductsController {
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 100,
    @Query('brand') brand: string,
  ) {
    return `${limit} and ${offset} ${brand}`;
  }
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }
}
