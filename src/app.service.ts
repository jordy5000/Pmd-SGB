import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //getHello(): string {
  // return 'Hello PM!';
  //}
  //postHello(): string {
  //  return 'PMD';
  //}
  getClient(body): string {
    return `${body.name}`;
  }
  postClient(body): string {
    return `${body.name}`;
  }
}
