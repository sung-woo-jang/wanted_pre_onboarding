import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar' })
  position: string;

  @Column({ type: 'varchar' })
  skill: string;

  @Column({ type: 'int' })
  reward: number;

  @Column({ type: 'varchar' })
  description: string;
}

// - 회사가 올린 다른 채용 공고
