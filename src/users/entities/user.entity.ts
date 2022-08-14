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
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @OneToMany(() => Apply, (apply) => apply.user, { eager: true })
  apply: Apply[];
}
