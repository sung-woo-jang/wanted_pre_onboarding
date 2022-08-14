import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto) {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async updateBoard(id: number, updateBoardDto: UpdateBoardDto) {
    await this.boardRepository.update(id, { ...updateBoardDto });

    return await this.boardRepository.findOne(id);
  }

  async deleteBoard(id: number) {
    await this.boardRepository.delete({ id });
    return { status: true };
  }

  async getAllBoards() {
    return await this.boardRepository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.company', 'company')
      .select([
        'board.id',
        'board.position',
        'board.reward',
        'board.skill',
        'company.name',
        'company.nation',
        'company.location',
      ])
      .getMany();
  }

  async getBoardSearch(search: string) {
    return await this.boardRepository.getBoardSearch(search);
  }

  async getBoard(id: number) {
    return this.boardRepository.getBoardById(id);
  }
}
