/*
  Warnings:

  - Added the required column `car_id` to the `Demand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demand" ADD COLUMN     "car_id" INTEGER NOT NULL;
