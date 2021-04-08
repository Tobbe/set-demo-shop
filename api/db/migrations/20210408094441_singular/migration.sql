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
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
