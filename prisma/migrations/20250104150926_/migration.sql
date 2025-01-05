/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Templates` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AdminUsers" ADD COLUMN "companyAddress" TEXT;
ALTER TABLE "AdminUsers" ADD COLUMN "companyEmail" TEXT;
ALTER TABLE "AdminUsers" ADD COLUMN "companyLogo" TEXT;
ALTER TABLE "AdminUsers" ADD COLUMN "companyName" TEXT;
ALTER TABLE "AdminUsers" ADD COLUMN "companyPhone" TEXT;
ALTER TABLE "AdminUsers" ADD COLUMN "companyWebsite" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Templates_name_key" ON "Templates"("name");
