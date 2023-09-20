import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import NpmException from 'src/exception/NpmException';
import RequestLogin from 'src/authentication/dto/request-login.dto';
import { LOGIN_ERROR } from 'src/user/repository/error.code';
import UserRepository from 'src/user/repository/user.repository';
import { JwtService } from '@nestjs/jwt';
import JwtPayload from '../strategy/JwtPayload';

@Injectable()
class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(requestLogin: RequestLogin) {
    try {
      await this.getAuthenticatedUser(requestLogin);
      return await this.getToken({
        sub: requestLogin.id,
        id: requestLogin.id,
      });
    } catch (error) {
      const { message } = error as NpmException;
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  async verifyByPassword(inputPassword, hashedPassword) {
    const isPasswordMatching = await compare(inputPassword, hashedPassword);

    return isPasswordMatching;
  }

  async getAuthenticatedUser(requestLogin: RequestLogin) {
    const user = await this.userRepository.findOneBy({
      id: requestLogin.id,
    });
    if (!user) {
      throw new NpmException(LOGIN_ERROR.NOT_VERIF);
    }

    const isPasswordMatching = this.verifyByPassword(
      requestLogin.password,
      user.password,
    );
    if (!isPasswordMatching) {
      throw new NpmException(LOGIN_ERROR.NOT_VERIF);
    }
    return user;
  }

  getToken(payload: JwtPayload) {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '2h',
      secret: process.env.JWT_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_SECRET,
    });

    return { accessToken, refreshToken };
  }
}

export default AuthenticationService;
