import { PickType } from '@nestjs/mapped-types';
import { Company } from 'src/companies/entities/companies.entity';
import { Board } from '../entities/board.entity';

export class CreateBoardDto extends PickType(Board, [
  'position',
  'skill',
  'reward',
  'description',
  'company',
]) {}
