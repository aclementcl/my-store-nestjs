import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'alejandro.clemente@test.cl',
      password: 'sdfsdfsd',
      role: 'Software Engineer',
    },
  ];
  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id == id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...user,
        ...changes,
      };
      return this.users[index];
    }
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User ${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
