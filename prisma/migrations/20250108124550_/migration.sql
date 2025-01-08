-- CreateTable
CREATE TABLE "AdminUsers" (
    "id" TEXT NOT NULL,
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
    "companySign" TEXT,

    CONSTRAINT "AdminUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "content1" TEXT,
    "content2" TEXT,
    "date" TEXT,
    "cid" TEXT,
    "footer" TEXT,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "Templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmpData" (
    "id" TEXT NOT NULL,
    "empId" TEXT NOT NULL,
    "empHash" TEXT,
    "tx" TEXT,
    "fname" TEXT NOT NULL,
    "mname" TEXT,
    "lname" TEXT NOT NULL,
    "email" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "pfNumber" TEXT,
    "phone" TEXT,
    "department" TEXT,
    "designation" TEXT,
    "salary" INTEGER,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "EmpData_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "Templates" ADD CONSTRAINT "Templates_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpData" ADD CONSTRAINT "EmpData_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "AdminUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
