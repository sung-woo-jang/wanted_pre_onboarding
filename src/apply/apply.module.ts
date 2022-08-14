import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyRepository } from './apply.repository';
import { ApplyService } from './apply.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplyRepository])],
  providers: [ApplyService],
  exports: [ApplyService],
})
export class ApplyModule {}
