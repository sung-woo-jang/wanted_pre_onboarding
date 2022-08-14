import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApplyService } from './apply.service';
import { CreateApplyDto } from './dto/create-apply.dto';

@Controller('apply')
export class ApplyController {
  constructor(private applyService: ApplyService) {}

  @Post('/')
  @ApiOperation({
    summary: '채용공고 지원 API',
    description: '사용자는 채용공고에 지원하며 1회만 지원 가능합니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  createApply(@Body() createApplyDto: CreateApplyDto) {
    return this.applyService.createApply(createApplyDto);
  }
}
