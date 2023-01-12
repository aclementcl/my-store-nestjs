import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';
import { OrdersService } from './services/orders.service';

@Module({
  controllers: [UsersController, CustomersController, OrdersController],
  providers: [UsersService, CustomersService, OrdersService],
})
@Module({})
export class UsersModule {}
