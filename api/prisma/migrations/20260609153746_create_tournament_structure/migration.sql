/*
  Warnings:

  - The values [PLAYOFF,GROUP_STAGE] on the enum `TournamentFormat` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `points_draw` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `points_loss` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `points_win` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `rules` on the `Tournament` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TournamentFormat_new" AS ENUM ('LEAGUE', 'KNOCKOUT', 'GROUPS_AND_PLAYOFFS');
ALTER TABLE "Tournament" ALTER COLUMN "format" TYPE "TournamentFormat_new" USING ("format"::text::"TournamentFormat_new");
ALTER TYPE "TournamentFormat" RENAME TO "TournamentFormat_old";
ALTER TYPE "TournamentFormat_new" RENAME TO "TournamentFormat";
DROP TYPE "public"."TournamentFormat_old";
COMMIT;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "points_draw",
DROP COLUMN "points_loss",
DROP COLUMN "points_win",
DROP COLUMN "rules";
