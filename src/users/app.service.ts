import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [{key:1,name:"Saad",age:24,class:"BSCS"}];
  
  findAll(): User[] {
    return this.users;
  }

  findOne(id:number):User{
    let user: User = this.users.find((item) => item.key == id);
    if(!user) throw new BadRequestException(`#${id} not found`);
    return user;
  }

  createUser(user: CreateUserDto){
    this.users.push({...user});
    return 'User Created Succesfully';
  }

  deleteUser(id:number): String{
      let index: number = this.users.findIndex((item) => item.key == id);
      if(index==-1) throw new BadRequestException(`#${id} not found`);
      this.users.splice(index,1);
      return 'User Deleted Successfully';
  }

  updateUser(id:number, newUser:UpdateUserDto):String{
    let index: number = this.users.findIndex((item) => item.key == id);
    if(index==-1) throw new BadRequestException(`#${id} not found`);
    let oldUser = this.users[index];
    this.users[index] = {key:id, ...newUser};
      return 'User Updated Successfully';
  }

  deleteAll():String{
    this.users=[];
    return 'All Users Deleted';
  }

}
