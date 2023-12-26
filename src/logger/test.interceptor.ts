import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const id = Math.round(Math.random() * 100000);
    console.log(`[id]`);

    const started = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(`Transaction Ended... ${Date.now() - started}ms`),
        ),
      );
  }
}
