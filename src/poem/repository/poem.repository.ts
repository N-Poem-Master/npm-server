import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import Poem from '../entity/poem.entity';
import { Repository } from 'typeorm';

@CustomRepository(Poem)
class PoemRepository extends Repository<Poem> {}

export default PoemRepository;
