import { ForbiddenException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateApplyDto } from './dto/create-apply.dto';
import { Apply } from './entities/apply.entity';

@EntityRepository(Apply)
export class ApplyRepository extends Repository<Apply> {
  async createApply(createApplyDto: CreateApplyDto): Promise<Apply> {
    const { user } = createApplyDto;
    const exitedList = await this.createQueryBuilder('apply')
      .leftJoinAndSelect('apply.user', 'user')
      .where('user.id = :id', { id: user })
      .getOne();

    if (exitedList) throw new ForbiddenException('지원 횟수를 초과하셨습니다');

    const createdList = await this.create(createApplyDto).save();
    return createdList;
  }
}
