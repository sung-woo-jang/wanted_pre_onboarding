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
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }
  // TODO 채용공고 수정
  @Patch('/:id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(id, updateBoardDto);
  }

  // TODO 채용공고 삭제
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.deleteBoard(id);
  }

  // TODO 채용공고 목록 가져오기
  @Get('/')
  getAllBoard() {
    return this.boardService.getAllBoards();
  }

  // TODO 채용공고 검색 기능 구현
  @Get('/')
  getBoardSearch(@Query('search') search: string) {
    return this.boardService.getBoardSearch(search);
  }

  // TODO 채용공고 상세 페이지 가져오기
  @Get('/detail/:id')
  getPosting(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.getBoard(id);
  }
}
