import { ApiProperty } from '@nestjs/swagger';
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
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty({
    example: 'NestJS',
    description: '사용기술',
  })
  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  skill: string;

  @ApiProperty({
    example: 1000000,
    description: '채용보상금',
  })
  @Column({ type: 'int' })
  @IsNumber()
  reward: number;

  @ApiProperty({
    example: '원티드 랩에서 주니어 개발자를 채용합니다.',
    description: '채용 내용',
  })
  @Column({ type: 'varchar' })
  @IsString()
  description: string;

  @ApiProperty({ type: () => Company })
  @ManyToOne(() => Company, (company) => company.boards, { eager: false })
  company: Company;

  @ApiProperty({ type: () => Apply })
  @OneToMany(() => Apply, (apply) => apply.board, { eager: true })
  apply: Apply[];
}
