/*
  Warnings:

  - You are about to alter the column `n_data` on the `notasfiscais` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[p_idopcional]` on the table `produtos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `notasfiscais` MODIFY `n_data` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `p_idopcional` VARCHAR(100) NULL,
    MODIFY `p_id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateIndex
CREATE UNIQUE INDEX `produtos_p_idopcional_key` ON `produtos`(`p_idopcional`);
