/*
  Warnings:

  - You are about to alter the column `n_data` on the `notasfiscais` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `categorias` MODIFY `c_subcat` INTEGER NULL;

-- AlterTable
ALTER TABLE `notasfiscais` MODIFY `n_data` DATETIME NOT NULL;
