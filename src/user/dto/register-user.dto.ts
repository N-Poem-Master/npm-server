import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class RegisterUserDto {
  @IsString()
  @ApiProperty({ description: '사용자 아이디' })
  readonly userId: string;

  @IsString()
  @ApiProperty({ description: '이름' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: '이메일', default: 'test@test.com' })
  readonly email: string;

  @IsString()
  @ApiProperty({ description: '비밀번호' })
  readonly password: string;
}

export default RegisterUserDto;
