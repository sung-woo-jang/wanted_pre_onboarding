import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Board } from 'src/board/entities/board.entity';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apply extends BaseEntity {
  @ApiProperty({
    example: '1',
    description: '지원_id',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => User, example: 1 })
  @ManyToOne(() => User, (user) => user.apply, { eager: false })
  @IsNotEmpty()
  user: User;

  @ApiProperty({ type: () => Board, example: 1 })
  @ManyToOne(() => Board, (Board) => Board.apply, {
    eager: false,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @IsNotEmpty()
  board: Board;
}
