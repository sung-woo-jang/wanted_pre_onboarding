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

  async getBoardSearch(search: string) {
    return await this.createQueryBuilder('board')
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
      .orWhere('board.position Like:position', {
        position: `%${search}%`,
      })
      .orWhere('board.skill Like:skill', {
        skill: `%${search}%`,
      })
      .orWhere('company.name Like:name', {
        name: `%${search}%`,
      })
      .orWhere('company.nation Like:nation', {
        nation: `%${search}%`,
      })
      .orWhere('company.location Like:location', {
        location: `%${search}%`,
      })
      .getMany();
  }

  async getBoardById(id: number) {
    return await this.createQueryBuilder('board')
      .leftJoinAndSelect('board.company', 'company')
      .where({ id })
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
}
