import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Order, Prisma, OrderStatus } from "@prisma/client";

@Injectable()
export class AppService {
    constructor(private prisma: PrismaService) {}

    async orders(): Promise<Order[]> {
        return this.prisma.order.findMany();
    }

    async newOrders(): Promise<Order[]> {
        return this.prisma.order.findMany({
            where: {
                status: OrderStatus.NEW
            }
        });
    }

    async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
        return this.prisma.order.create({
            data
        });
    }

    async updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order> {
        return this.prisma.order.update({
            where: {
                orderId
            },
            data: {
                status
            }
        });
    }
    
}