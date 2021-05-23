/*
  Warnings:

  - Added the required column `deviceType` to the `Meter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meter" ADD COLUMN     "deviceType" TEXT NOT NULL,
ALTER COLUMN "humidity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "temperature" SET DATA TYPE DOUBLE PRECISION;
