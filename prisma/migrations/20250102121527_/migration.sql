/*
  Warnings:

  - You are about to drop the column `templateId` on the `EmpData` table. All the data in the column will be lost.

*/
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
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "pfNumber" TEXT,
    "phone" TEXT,
    "department" TEXT,
    "designation" TEXT,
    "salary" INTEGER,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "EmpData_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EmpData" ("adminId", "department", "designation", "email", "empHash", "empId", "endDate", "fname", "id", "lname", "mname", "phone", "salary", "startDate") SELECT "adminId", "department", "designation", "email", "empHash", "empId", "endDate", "fname", "id", "lname", "mname", "phone", "salary", "startDate" FROM "EmpData";
DROP TABLE "EmpData";
ALTER TABLE "new_EmpData" RENAME TO "EmpData";
CREATE UNIQUE INDEX "EmpData_empId_key" ON "EmpData"("empId");
CREATE UNIQUE INDEX "EmpData_empHash_key" ON "EmpData"("empHash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
