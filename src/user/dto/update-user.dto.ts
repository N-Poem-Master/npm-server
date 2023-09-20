import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class UpdateUserDto {
  @IsString()
  @ApiProperty({ description: '이름' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: '이메일' })
  readonly email: string;
}

export default UpdateUserDto;
