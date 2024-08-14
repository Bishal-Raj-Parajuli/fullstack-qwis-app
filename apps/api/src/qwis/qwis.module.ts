import { Module } from '@nestjs/common';
import { QwisService } from './qwis.service';
import { QwisController } from './qwis.controller';
import { DBModule } from 'db/db.module';

@Module({
  imports: [DBModule],
  controllers: [QwisController],
  providers: [QwisService],
})
export class QwisModule {}
