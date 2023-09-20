import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class GetUserDto {
  @IsString()
  @ApiProperty({ description: '사용자 아이디' })
  userId: string;

  @IsString()
  @ApiProperty({ description: '이름' })
  name: string;

  @IsEmail()
  @ApiProperty({ description: '이메일', default: 'test@test.com' })
  email: string;
}

export default GetUserDto;
