import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    key:number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    class: string;
    @IsNotEmpty()
    age:number;
}