import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { CreatePoemDto } from '../dto/create-poem.dto';
@Entity()
class Poem extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  authorId: string;

  @Column('text', { array: true })
  keyword: string[];

  @Column('text', { array: true })
  answer: string[];

  @Column()
  point: number;

  static toEntity(poemDto: CreatePoemDto) {
    const poem = new Poem();
    poem.authorId = poemDto.authorId;
    poem.answer = poemDto.answer;
    poem.keyword = poemDto.keyword;
    return poem;
  }
}

export default Poem;
