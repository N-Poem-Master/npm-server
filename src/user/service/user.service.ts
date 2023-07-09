import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import UserRepository from '../repository/user.repository';
import RegisterUserDto from '../dto/register-user.dto';
import User from '../entity/user.entity';
import { USER_CREATE_ERROR } from '../repository/error.code';
import NpmException from 'src/exception/NpmException';
import { hash } from 'bcrypt';

@Injectable()
class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(userData: RegisterUserDto) {
    try {
      const existUser = await this.userRepository.findOneBy({
        id: userData.userId,
      });
      if (existUser) {
        throw new NpmException(USER_CREATE_ERROR.DUPLICATED_ID);
      }

      const existEmail = await this.userRepository.findOneBy({
        email: userData.email,
      });
      if (existEmail) {
        throw new NpmException(USER_CREATE_ERROR.DUPLICATED_EMAIL);
      }
      const encryptedPassword = await hash(userData.password, 5);
      await this.userRepository.save(
        User.toEntity({ ...userData, password: encryptedPassword }),
      );
      return true;
    } catch (error) {
      const { message } = error as NpmException;
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(id: string) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    if (!user) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND);
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

export default UserService;
