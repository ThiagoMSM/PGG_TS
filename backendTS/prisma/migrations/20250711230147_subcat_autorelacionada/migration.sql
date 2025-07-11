/*
  Warnings:

  - You are about to alter the column `n_data` on the `notasfiscais` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `notasfiscais` MODIFY `n_data` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `categorias` ADD CONSTRAINT `categorias_c_subcat_fkey` FOREIGN KEY (`c_subcat`) REFERENCES `categorias`(`c_id`) ON DELETE SET NULL ON UPDATE CASCADE;
