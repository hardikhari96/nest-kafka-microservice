import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/createOrder')
  createOrder(@Body() createOrderRequest: CreateOrderRequest): any {
    return this.appService.createOrder(createOrderRequest);
  }
}
