import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BetModule } from './bet/bet.module';

@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    UserModule,
    BetModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
