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
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  nation: string;

  @Column({ type: 'varchar' })
  location: string;

  @OneToMany((_) => Board, (board) => board.company, { eager: true })
  boards: Board[];
}
