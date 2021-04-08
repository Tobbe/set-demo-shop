/*
  Warnings:

  - You are about to drop the `Band` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Band";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Bands" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Bands.slug_unique" ON "Bands"("slug");
