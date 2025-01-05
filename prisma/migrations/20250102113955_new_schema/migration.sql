/*
  Warnings:

  - Added the required column `adminId` to the `EmpData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `EmpData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Templates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "Templates_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EmpData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "empId" TEXT NOT NULL,
    "empHash" TEXT,
    "fname" TEXT NOT NULL,
    "mname" TEXT,
    "lname" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "department" TEXT,
    "designation" TEXT,
    "salary" INTEGER,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "adminId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "EmpData_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EmpData_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Templates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EmpData" ("department", "designation", "email", "empHash", "empId", "endDate", "fname", "id", "lname", "mname", "phone", "salary", "startDate") SELECT "department", "designation", "email", "empHash", "empId", "endDate", "fname", "id", "lname", "mname", "phone", "salary", "startDate" FROM "EmpData";
DROP TABLE "EmpData";
ALTER TABLE "new_EmpData" RENAME TO "EmpData";
CREATE UNIQUE INDEX "EmpData_empId_key" ON "EmpData"("empId");
CREATE UNIQUE INDEX "EmpData_empHash_key" ON "EmpData"("empHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
