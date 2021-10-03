import { Injectable } from '@nestjs/common';

let a = 0;

setInterval(() => {a++},1000)

@Injectable()
export class AppService {
  getHello(): number {
    // return 'Hello World!';
    return a;
  }
}
