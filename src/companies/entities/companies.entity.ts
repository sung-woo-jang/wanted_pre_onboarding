import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Board } from 'src/board/entities/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @ApiProperty({
    example: '1',
    description: '회사_id',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '원티드랩',
    description: '회사명',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '한국',
    description: '국가',
  })
  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  nation: string;

  @ApiProperty({
    example: '서울',
    description: '지역',
  })
  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ type: () => Board })
  @OneToMany(() => Board, (board) => board.company, { eager: true })
  boards: Board[];
}
