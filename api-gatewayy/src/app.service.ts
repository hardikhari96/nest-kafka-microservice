import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
import { CreateOrderRequest } from './request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  createOrder({ orderId, userId, price }: CreateOrderRequest) {
    console.log({ orderId, userId, price });
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent(orderId, userId, price),
    );
  }
}
