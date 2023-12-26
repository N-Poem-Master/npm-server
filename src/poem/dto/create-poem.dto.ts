import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePoemDto {
  @IsString()
  @ApiProperty({ description: '유저 아이디' })
  readonly authorId: string;

  @IsArray()
  @ApiProperty({ description: '키워드' })
  readonly keyword: string[];

  @IsArray()
  @ApiProperty({ description: '대답' })
  readonly answer: string[];
}
