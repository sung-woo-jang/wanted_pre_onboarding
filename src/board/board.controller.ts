import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 채용공고 목록 가져오기
  @Get('/')
  @ApiOperation({
    summary: '채용공고 가져오기 API',
    description: '모든 채용공고들을 가져옵니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  getAllBoard(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  // 채용공고 검색 기능 구현
  @Get('/search')
  @ApiOperation({
    summary: '채용공고 검색 API',
    description: '채용공고에 원하는 내용을 검색하여 찾습니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  getBoardSearch(@Query('search') search: string): Promise<Board[]> {
    return this.boardService.getBoardSearch(search);
  }

  // 채용공고 상세 페이지 가져오기
  @Get('/detail/:id')
  @ApiOperation({
    summary: '특정 채용공고 자세히 가져오기 API',
    description: '원하는 채용공고의 자세한 내용을 가져옵니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  getPosting(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.getBoard(id);
  }

  // 채용공고 등록
  @Post()
  @ApiOperation({
    summary: '채용공고 등록 API',
    description: '채용공고를 등록합니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  @ApiResponse({ status: 409, description: '실패' })
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }
  // 채용공고 수정
  @Patch('/:id')
  @ApiOperation({
    summary: '채용공고 수정 API',
    description: '채용공고에 원하는 내용을 수정합니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    return this.boardService.updateBoard(id, updateBoardDto);
  }

  // 채용공고 삭제
  @Delete('/:id')
  @ApiOperation({
    summary: '채용공고 삭제 API',
    description: '채용공를 삭제합니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ status: boolean }> {
    return this.boardService.deleteBoard(id);
  }
}
