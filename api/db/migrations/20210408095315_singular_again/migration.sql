/*
  Warnings:

  - You are about to drop the `Bands` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Bands";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Band" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Band.slug_unique" ON "Band"("slug");
