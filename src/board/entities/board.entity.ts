import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Apply } from 'src/apply/entities/apply.entity';
import { Company } from 'src/companies/entities/companies.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  position: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  skill: string;

  @Column({ type: 'int' })
  @IsNumber()
  reward: number;

  @Column({ type: 'varchar' })
  @IsString()
  description: string;

  @ManyToOne((_) => Company, (company) => company.boards, { eager: false })
  company: Company;

  @OneToMany(() => Apply, (apply) => apply.board, { eager: true })
  apply: Apply[];
}
