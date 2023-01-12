import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  Req,
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 100,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `${limit} and ${offset} ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `Product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  @Post()
  // create(@Res() response: Response, @Body() payload: any) {
  create(@Body() payload: CreateProductDto) {
    // response.status(201).send({
    //   message: 'Accion de crear',
    //   payload,
    // });
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: UpdateProductDto, @Param('id') id: string) {
    // return {
    //   message: 'updated',
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // return {
    //   message: 'deleted',
    //   id,
    // };
    return this.productsService.remove(id);
  }
}
