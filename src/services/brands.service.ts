import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Google',
      image: 'https://google.png',
    },
  ];
  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id == id);
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, changes: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((item) => item.id === id);
      this.brands[index] = {
        ...brand,
        ...changes,
      };
      return this.brands[index];
    }
    return brand;
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
