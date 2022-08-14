import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: '1',
    description: '채용공고_id',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '백엔드 주니어',
    description: '포지션',
  })
  @Column({ type: 'varchar' })
  position: string;

  @ApiProperty({
    example: 'NestJS',
    description: '사용기술',
  })
  @Column({ type: 'varchar' })
  skill: string;

  @ApiProperty({
    example: 1000000,
    description: '채용보상금',
  })
  @Column({ type: 'int' })
  reward: number;

  @ApiProperty({
    example: '원티드 랩에서 주니어 개발자를 채용합니다.',
    description: '채용 내용',
  })
  @Column({ type: 'varchar' })
  description: string;

  @ApiProperty({ type: () => Company, example: 1 })
  @ManyToOne(() => Company, (company) => company.board, {
    eager: false,
    nullable: false,
    onDelete: 'CASCADE',
  })
  company: Company;

  @ApiProperty({ type: () => Apply, example: 1 })
  @OneToMany(() => Apply, (apply) => apply.board, { eager: true })
  apply: Apply[];
}
