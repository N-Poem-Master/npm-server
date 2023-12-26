import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePoemDto } from '../dto/create-poem.dto';
import { PoemService } from '../service/poem.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { Auth } from 'src/authentication/guard/Auth';

@Controller('poems')
@ApiTags('N행시 API')
export class PoemController {
  constructor(private readonly poemService: PoemService) {}

  @Get()
  getAll() {
    return this.poemService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.poemService.get(id);
  }

  @Auth()
  @Post()
  @ApiOperation({
    summary: 'N행시 제출 API',
    description: 'N행시를 제출해요.',
  })
  create(@Body() poem: CreatePoemDto) {
    return this.poemService.create(poem);
  }

  @Auth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.poemService.delete(id);
  }
}
