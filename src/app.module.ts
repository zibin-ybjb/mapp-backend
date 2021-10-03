import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/zbdata')],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
