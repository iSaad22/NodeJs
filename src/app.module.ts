import { Module } from '@nestjs/common';
import { UsersController } from './users/app.controller';
import { UsersService } from './users/app.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
