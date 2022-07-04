import { Bet } from './models/bet.model';

export const betProviders = [
  {
    provide: 'BET_REPOSITORY',
    useValue: Bet,
  },
];
