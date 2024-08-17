import { Module } from '@nestjs/common';
import { QwisModule } from './qwis/qwis.module';

@Module({
  imports: [QwisModule],
})
export class AppModule {}
