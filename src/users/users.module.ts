import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserChatGateway } from './user.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController ],
  providers: [UsersService, UserChatGateway],
  exports: [UsersService]
})
export class UsersModule {}
