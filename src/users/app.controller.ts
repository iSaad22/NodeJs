import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { UsersService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService) {}

  //Checked
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  //Checked
  @Get('/')
  findAll() {
    return {data:this.userService.findAll()};
  }

  //Checked
  @Get(':id')
  findOne(@Param('id') id){
    return {data:[this.userService.findOne(id)]};
  }

  @Put('update/:id')
  updateUser(@Param('id') id:number,@Body() newUser:UpdateUserDto){
    console.log(newUser)
    return this.userService.updateUser(id,newUser);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id:number):String{
    return this.userService.deleteUser(id);
  }

  @Delete('')
  deleteAll():String{
    return this.userService.deleteAll();
  }
}
export default UsersController;