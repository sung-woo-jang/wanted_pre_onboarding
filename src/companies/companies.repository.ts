import { EntityRepository, Repository } from 'typeorm';
import { Company } from './entities/companies.entity';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  async getOtherBoards(id: number): Promise<any[]> {
    return (
      await this.createQueryBuilder('company')
        .leftJoinAndSelect('company.board', 'board')
        .select(['board.id'])
        .where('board.company = :id', { id })
        .getRawMany()
    ).map((el) => el.board_id);
  }
}
