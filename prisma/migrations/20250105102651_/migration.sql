/*
  Warnings:

  - You are about to drop the column `template` on the `Templates` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Templates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "content1" TEXT,
    "content2" TEXT,
    "date" TEXT,
    "cid" TEXT,
    "footer" TEXT,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "Templates_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Templates" ("adminId", "id", "name") SELECT "adminId", "id", "name" FROM "Templates";
DROP TABLE "Templates";
ALTER TABLE "new_Templates" RENAME TO "Templates";
CREATE UNIQUE INDEX "Templates_name_key" ON "Templates"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
