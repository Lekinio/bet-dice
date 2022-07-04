import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
  providers: [UserResolver, UserService, ...userProviders],
  imports: [DatabaseModule],
  exports: [UserService, UserResolver],
})
export class UserModule {}
