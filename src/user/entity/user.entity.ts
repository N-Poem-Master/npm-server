import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

import RegisterUserDto from '../dto/register-user.dto';
import GetUserDto from '../dto/get-user.dto';

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

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
