import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'userList' })
  getUserList() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOneById(id);
  }
}
