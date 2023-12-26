import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import Poem from '../entity/poem.entity';
import { CreatePoemDto } from '../dto/create-poem.dto';
import PoemRepository from '../repository/poem.repository';

@Injectable()
export class PoemService {
  private readonly logger = new Logger(PoemService.name);
  constructor(private readonly poemRepository: PoemRepository) {}

  getAll() {
    return this.poemRepository.find();
  }

  get(id: number) {
    const findPoem = this.poemRepository.findOneBy({ id });
    if (!findPoem) {
      return new NotFoundException(id);
    }
    return findPoem;
  }

  create(poemDto: CreatePoemDto) {
    this.poemRepository.save(Poem.toEntity(poemDto));

    return true;
  }

  delete(id: number) {
    this.poemRepository.delete({ id });
  }
}
