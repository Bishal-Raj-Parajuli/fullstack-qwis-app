import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QwisModule } from './qwis/qwis.module';
import { DBModule } from 'db/db.module';

@Module({
  imports: [QwisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
