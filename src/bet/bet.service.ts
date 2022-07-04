import { Inject, Injectable } from '@nestjs/common';
import { Bet } from './models/bet.model';
import { User } from '../user/models/user.model';
import { Sequelize } from 'sequelize-typescript';


@Injectable()
export class BetService {
  constructor(
    @Inject('BET_REPOSITORY') private readonly betRepository: typeof Bet,
  ) {}

  createBet(createBetInput): Promise<Bet> {
    return this.betRepository.create<Bet>(createBetInput);
  }

  getBetList(): Promise<Bet[]> {
    return this.betRepository.findAll<Bet>({ include: [User] });
  }

  getBet(id: number): Promise<Bet> {
    return this.betRepository.findOne<Bet>({ where: { id }, include: [User] });
  }

  getBestBetPerUser(limit: number) {
    return this.betRepository.findAll({
      attributes: [
        [Sequelize.fn('MAX', Sequelize.col('chance')), 'chance'],
        'userId',
      ],
      include: ['user'],
      group: ['userId'],
      limit,
    });
  }
}
