/*
  Warnings:

  - You are about to alter the column `n_data` on the `notasfiscais` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `movimentos` MODIFY `m_data` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `notasfiscais` MODIFY `n_data` DATETIME NOT NULL;
