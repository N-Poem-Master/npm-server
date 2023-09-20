import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

import RegisterUserDto from '../dto/register-user.dto';
import GetUserDto from '../dto/get-user.dto';

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  static toEntity(userDto: RegisterUserDto): User {
    const user = new User();
    user.id = userDto.userId;
    user.email = userDto.email;
    user.password = userDto.password;
    user.name = userDto.name;
    return user;
  }

  toDto() {
    const user = new GetUserDto();
    user.userId = this.id;
    user.email = this.email;
    user.name = this.name;
    return user;
  }
}

export default User;
