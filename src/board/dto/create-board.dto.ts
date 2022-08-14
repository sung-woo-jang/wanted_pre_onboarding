import { PickType } from '@nestjs/swagger';
import { Board } from '../entities/board.entity';

export class CreateBoardDto extends PickType(Board, [
  'position',
  'skill',
  'reward',
  'description',
  'company',
] as const) {}
