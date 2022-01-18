import { Module } from '@nestjs/common';
import { ExistEntityService } from './service';

@Module({
  providers: [ExistEntityService],
  exports: [ExistEntityService],
})
export class LibsModule {}
