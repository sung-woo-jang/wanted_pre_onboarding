import { PickType } from '@nestjs/mapped-types';
import { Apply } from '../entities/apply.entity';

export class CreateApplyDto extends PickType(Apply, [
  'user',
  'board',
] as const) {}
