import { IsNotEmpty, IsNumber } from 'class-validator';
import { Board } from 'src/board/entities/board.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apply extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @ManyToOne(() => User, (user) => user.apply, { eager: false })
  @IsNotEmpty()
  user: User;

  @ManyToOne(() => Board, (Board) => Board.apply, { eager: false })
  @IsNotEmpty()
  board: Board;
}
