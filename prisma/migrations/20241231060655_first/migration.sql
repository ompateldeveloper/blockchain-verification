-- CreateTable
CREATE TABLE "AdminUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "fname" TEXT,
    "lname" TEXT,
    "password" TEXT NOT NULL,
    "pk" TEXT
);

-- CreateTable
CREATE TABLE "EmpData" (
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
    "endDate" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_email_key" ON "AdminUsers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_username_key" ON "AdminUsers"("username");

-- CreateIndex
CREATE UNIQUE INDEX "EmpData_empId_key" ON "EmpData"("empId");

-- CreateIndex
CREATE UNIQUE INDEX "EmpData_empHash_key" ON "EmpData"("empHash");
