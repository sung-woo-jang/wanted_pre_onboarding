import { EntityRepository, Repository } from 'typeorm';
import { CreateApplyDto } from './dto/create-apply.dto';
import { Apply } from './entities/apply.entity';

@EntityRepository(Apply)
export class ApplyRepository extends Repository<Apply> {
  async createApply(createApplyDto: CreateApplyDto) {
    return '';
  }
}
