import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(`${method} ${statusCode} - ${originalUrl}`);
    });
    next();
  }
}
