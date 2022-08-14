import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { CompanyRepository } from 'src/companies/companies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository, CompanyRepository])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
