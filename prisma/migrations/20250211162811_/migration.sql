-- CreateTable
CREATE TABLE "AdminUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "fname" TEXT,
    "lname" TEXT,
    "password" TEXT NOT NULL,
    "pk" TEXT,
    "companyName" TEXT,
    "companyAddress" TEXT,
    "companyPhone" TEXT,
    "companyEmail" TEXT,
    "companyWebsite" TEXT,
    "companyLogo" TEXT,
    "companySign" TEXT
);

-- CreateTable
CREATE TABLE "Templates" (
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

-- CreateTable
CREATE TABLE "EmpData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "empId" TEXT NOT NULL,
    "empHash" TEXT,
    "tx" TEXT,
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

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_email_key" ON "AdminUsers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_username_key" ON "AdminUsers"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Templates_name_key" ON "Templates"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Templates_adminId_key" ON "Templates"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "EmpData_empId_key" ON "EmpData"("empId");

-- CreateIndex
CREATE UNIQUE INDEX "EmpData_empHash_key" ON "EmpData"("empHash");

-- CreateIndex
CREATE UNIQUE INDEX "EmpData_tx_key" ON "EmpData"("tx");
