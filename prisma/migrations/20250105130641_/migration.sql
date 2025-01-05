/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `Templates` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Templates_adminId_key" ON "Templates"("adminId");
