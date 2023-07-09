import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class RequestLogin {
  @IsString()
  @ApiProperty({ description: '사용자 아이디' })
  readonly id: string;

  @IsString()
  @ApiProperty({ description: '비밀번호' })
  readonly password: string;
}

export default RequestLogin;
