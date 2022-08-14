import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyRepository } from './apply.repository';
import { CreateApplyDto } from './dto/create-apply.dto';
import { Apply } from './entities/apply.entity';

@Injectable()
export class ApplyService {
  constructor(
    @InjectRepository(ApplyRepository) private applyRepository: ApplyRepository,
  ) {}
  createApply(createApplyDto: CreateApplyDto): Promise<Apply> {
    return this.applyRepository.createApply(createApplyDto);
  }
}
