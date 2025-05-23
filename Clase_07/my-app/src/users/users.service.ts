import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity'
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  // // Definimos el Array
  // users: Array<User>

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    // this.users = []
  }

  async create(createUserDto: CreateUserDto) {
    // createUserDto.id = this.users.length + 1
    // let newUser = this.users.push(createUserDto)

    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    // return this.users;
    return await this.userModel.find({})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
