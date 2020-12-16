import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users/app.controller';
import { UsersService } from './users/app.service';

describe('AppController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.create);
    });
  });
});
