import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Bet } from '../../bet/entities/bet.entity';

@ObjectType()
export class User {
  @Field(() => String)
  name: string;

  @Field(() => Float)
  balance: number;

  @Field((type) => [Bet])
  bets: Bet[];
}
