import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyRepository } from './apply.repository';
import { ApplyService } from './apply.service';
import { ApplyController } from './apply.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ApplyRepository])],
  providers: [ApplyService],
  controllers: [ApplyController],
})
export class ApplyModule {}
