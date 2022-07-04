import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';
import { betProviders } from './bet.providers';
import { DatabaseModule } from '../database/database.module';


@Module({
  providers: [BetResolver, BetService, ...betProviders],
  imports: [DatabaseModule],
  exports: [BetService, BetResolver],
})
export class BetModule {}
