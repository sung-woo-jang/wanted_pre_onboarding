import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from 'src/companies/companies.repository';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
    @InjectRepository(CompanyRepository)
    private companyRepository: CompanyRepository,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async updateBoard(
    id: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    await this.boardRepository.update(id, { ...updateBoardDto });

    return await this.boardRepository.findOne(id);
  }

  async deleteBoard(id: number): Promise<{ status: boolean }> {
    await this.boardRepository.delete({ id });
    return { status: true };
  }

  async getAllBoards(): Promise<Board[]> {
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

  async getBoardSearch(search: string): Promise<Board[]> {
    return await this.boardRepository.getBoardSearch(search);
  }

  async getBoard(id: number) {
    const board = await this.boardRepository.getBoardById(id);
    const otherBoards = await this.companyRepository.getOtherBoards(
      board['company_id'],
    );
    const result = {
      ...board,
      otherBoards_id: [...otherBoards.filter((e) => e !== id)],
    };
    return result;
  }
}
