import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('บอสมาเยือน');
    console.log('ทัชมาเยือน');
    console.log('แมนมาเยือน');
    return 'Hello World!';
  }
}
