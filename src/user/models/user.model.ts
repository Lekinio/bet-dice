import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Bet } from '../../bet/models/bet.model';

@Table
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  balance: number;

  @HasMany(() => Bet)
  bets: Bet[];
}
