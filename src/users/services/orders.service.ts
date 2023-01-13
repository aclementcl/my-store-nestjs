// import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
// import { Order } from '../entities/order.entity';

// @Injectable()
// export class OrdersService {
//   private counterId = 1;
//   private orders: Order[] = [
//     {
//       id: 1,
//       name: 'Test',
//       amount: 2,
//     },
//   ];
//   findAll() {
//     return this.orders;
//   }

//   findOne(id: number) {
//     const order = this.orders.find((item) => item.id == id);
//     if (!order) {
//       throw new NotFoundException(`Order ${id} not found`);
//     }
//     return order;
//   }

//   create(payload: CreateOrderDto) {
//     this.counterId++;
//     const newOrder = {
//       id: this.counterId,
//       ...payload,
//     };
//     this.orders.push(newOrder);
//     return newOrder;
//   }

//   update(id: number, changes: UpdateOrderDto) {
//     const order = this.findOne(id);
//     if (order) {
//       const index = this.orders.findIndex((item) => item.id === id);
//       this.orders[index] = {
//         ...order,
//         ...changes,
//       };
//       return this.orders[index];
//     }
//     return order;
//   }

//   remove(id: number) {
//     const index = this.orders.findIndex((item) => item.id === id);
//     if (index === -1) {
//       throw new NotFoundException(`Order ${id} not found`);
//     }
//     this.orders.splice(index, 1);
//     return true;
//   }
// }
