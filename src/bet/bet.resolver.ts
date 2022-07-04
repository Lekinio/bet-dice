import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BetService } from './bet.service';
import { Bet } from './entities/bet.entity';
import { CreateBetInput } from './dto/create-bet.input';

@Resolver(() => Bet)
export class BetResolver {
  constructor(private readonly betService: BetService) {}

  @Mutation(() => Bet, { name: 'createBet' })
  createBet(@Args('createBetInput') createBetInput: CreateBetInput) {
    return this.betService.createBet(createBetInput);
  }

  @Query(() => [Bet], { name: 'betList' })
  getBetList() {
    return this.betService.getBetList();
  }

  @Query(() => Bet, { name: 'bet' })
  getBet(@Args('id', { type: () => Int }) id: number) {
    return this.betService.getBet(id);
  }

  @Query(() => [Bet], { name: 'bestBetPerUser' })
  getBestBetPerUser(@Args('limit', { type: () => Int }) limit: number) {
    return this.betService.getBestBetPerUser(limit);
  }
}
