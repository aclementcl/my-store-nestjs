import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {

  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Carlos',
      lastName: 'Carrasco',
      phone: '94949',
    },
  ];
  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id == id);
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, changes: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...customer,
        ...changes,
      };
      return this.customers[index];
    }
    return customer;
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
