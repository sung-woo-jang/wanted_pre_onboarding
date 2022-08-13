import { Company } from 'src/companies/entities/companies.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  position: string;

  @Column({ type: 'varchar' })
  skill: string;

  @Column({ type: 'int' })
  reward: number;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne((_) => Company, (company) => company.boards, { eager: false })
  company: Company;
}
