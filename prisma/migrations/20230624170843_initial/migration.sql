-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('NEW', 'SUCCESS', 'FAIL');

-- CreateTable
CREATE TABLE "Order" (
    "orderId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "txHash" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'NEW',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);
