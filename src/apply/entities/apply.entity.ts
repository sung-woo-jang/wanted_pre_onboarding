import { IsNumber } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apply extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;
}
