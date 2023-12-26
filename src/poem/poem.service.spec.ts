import { Test, TestingModule } from '@nestjs/testing';
import { PoemService } from './service/poem.service';

describe('PoemService', () => {
  let service: PoemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoemService],
    }).compile();

    service = module.get<PoemService>(PoemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        authorId: 'member-9',
        keyword: ['T', 'S', 'E'],
        answer: ['Test', 'Start', 'End'],
      });

      const movie = service.get(0);
      expect(movie).toBeDefined();
    });
  });
});
