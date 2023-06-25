/*
  Warnings:

  - A unique constraint covering the columns `[txHash]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_txHash_key" ON "Order"("txHash");
