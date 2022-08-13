import { EntityRepository, Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto) {
    const { position, skill, reward, description, company } = createBoardDto;
    const board = await this.create({
      position,
      skill,
      reward,
      description,
      company,
    }).save();
    return board;
  }
}
