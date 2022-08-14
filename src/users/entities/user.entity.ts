import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Apply } from 'src/apply/entities/apply.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @ApiProperty({
    description: '사용자_id',
    required: true,
  })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({
    example: '장성우',
    description: '이름',
    required: true,
  })
  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: () => Apply })
  @OneToMany(() => Apply, (apply) => apply.user, { eager: true })
  apply: Apply[];
}
