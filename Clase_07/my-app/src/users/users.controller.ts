import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// para variables de entorno
import { ConfigService } from '@nestjs/config';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private config: ConfigService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

    // validamos datos entrantes
    if (!createUserDto.first_name || !createUserDto.last_name) throw new HttpException("Datos incompletos", HttpStatus.BAD_REQUEST)

    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    console.log(`Quiero para con ${this.config.get<string>('PAPA')}`);

    const user = await this.usersService.findAll();
    return { status: 'Success', payload: user }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
