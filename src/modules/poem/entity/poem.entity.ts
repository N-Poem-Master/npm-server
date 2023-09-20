import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Poem extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdTime: Date;
}

export default Poem;
