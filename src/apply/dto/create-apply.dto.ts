import { PickType } from '@nestjs/swagger';
import { Apply } from '../entities/apply.entity';

export class CreateApplyDto extends PickType(Apply, [
  'user',
  'board',
] as const) {}
