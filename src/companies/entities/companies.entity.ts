import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  nation: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @OneToMany((_) => Board, (board) => board.company, { eager: true })
  boards: Board[];
}
