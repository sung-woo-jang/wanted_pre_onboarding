import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { ApplyModule } from 'src/apply/apply.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), ApplyModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
