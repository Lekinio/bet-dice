import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { Bet } from "../bet/models/bet.model";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY") private readonly userRepository: typeof User
  ) {
  }

  findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>({ include: [Bet] });
  }

  findOneById(id: number): Promise<User> {
    return this.userRepository.findOne<User>({ where: { id }, include: [Bet] });
  }
}
