import { ObjectType, Field, Float } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Bet {
  @Field(() => Float)
  betAmount: number;

  @Field(() => Float)
  chance: number;

  @Field(() => Float)
  payout: number;

  @Field()
  win: boolean;

  @Field(() => User)
  user: User;
}
