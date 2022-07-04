import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { User } from '../../user/models/user.model';

@Table
export class Bet extends Model {
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  betAmount: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  chance: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  payout: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  win: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
