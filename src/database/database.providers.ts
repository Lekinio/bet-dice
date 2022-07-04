import { Sequelize } from 'sequelize-typescript';

import { databaseConfig } from './database.config';
import { User } from '../user/models/user.model';
import { Bet } from '../bet/models/bet.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([User, Bet]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
