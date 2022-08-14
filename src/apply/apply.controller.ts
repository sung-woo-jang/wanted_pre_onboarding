import { Body, Controller, Post } from '@nestjs/common';
import { ApplyService } from './apply.service';
import { CreateApplyDto } from './dto/create-apply.dto';

@Controller('apply')
export class ApplyController {
  constructor(private applyService: ApplyService) {}

  @Post('/')
  createApply(@Body() createApplyDto: CreateApplyDto) {
    return this.applyService.createApply(createApplyDto);
  }
}
