import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Get()
  //getHello(): string {
  //  return this.appService.getHello();
  //}

  //@Post()
  //postHello(): string {
  //  return this.appService.postHello();
  //}

  @Get()
  getClient(@Body()body: []): string {
    return this.appService.getClient(body);
  };

  @Post()
  postClient(@Body()body: []): string {
    return this.appService.postClient(body);
  }
}

