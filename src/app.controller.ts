import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Order, Prisma, OrderStatus } from '@prisma/client';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("/api/orders/")
    async getOrders(): Promise<Order[]> {
        return this.appService.orders();
    }

    @Get("/api/newOrders/")
    async getNewOrders(): Promise<Order[]> {
        return this.appService.newOrders();
    }

    @Post("/api/orders/")
    async createOrder(@Body() orderData: { orderId: string, price: string, txHash: string }): Promise<Order> {
        const {orderId, price, txHash} = orderData;
        return this.appService.createOrder({
            orderId,
            price,
            txHash,
            status: OrderStatus.NEW
        });
    }

    @Put("/api/orders/fail")
    async failOrder(@Body() orderData: {orderId: string}): Promise<Order> {
        return this.appService.updateOrderStatus(orderData.orderId, OrderStatus.FAIL)
    }

    @Put("/api/orders/complete")
    async completeOrder(@Body() orderData: {orderId: string}): Promise<Order> {
        return this.appService.updateOrderStatus(orderData.orderId, OrderStatus.SUCCESS)
    }
}
