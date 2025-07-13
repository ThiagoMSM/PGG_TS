/*
  Warnings:

  - You are about to alter the column `f_cnpj` on the `fornecedores` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `VarChar(14)`.
  - You are about to alter the column `u_cpf` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(14)` to `VarChar(11)`.

*/
-- DropForeignKey
ALTER TABLE `lotes` DROP FOREIGN KEY `lotes_l_idfornecedor_fkey`;

-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `produtos_p_catid_fkey`;

-- DropIndex
DROP INDEX `lotes_l_idfornecedor_fkey` ON `lotes`;

-- DropIndex
DROP INDEX `produtos_p_catid_key` ON `produtos`;

-- AlterTable
ALTER TABLE `categorias` MODIFY `c_nome` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `fornecedores` MODIFY `f_cnpj` VARCHAR(14) NOT NULL;

-- AlterTable
ALTER TABLE `lotes` MODIFY `l_apelido` VARCHAR(100) NULL,
    MODIFY `l_idfornecedor` INTEGER NULL;

-- AlterTable
ALTER TABLE `notasfiscais` MODIFY `n_numero` VARCHAR(44) NOT NULL,
    MODIFY `n_data` TIMESTAMP(3) NOT NULL,
    MODIFY `n_emissor` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `produtos` MODIFY `p_qtdeConsumo` INTEGER NULL;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `u_cpf` VARCHAR(11) NOT NULL;

-- AddForeignKey
ALTER TABLE `lotes` ADD CONSTRAINT `lotes_l_idfornecedor_fkey` FOREIGN KEY (`l_idfornecedor`) REFERENCES `fornecedores`(`f_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
-- ALTER TABLE `movimentos` ADD CONSTRAINT `movimentos_m_responsavelid_fkey` FOREIGN KEY (`m_responsavelid`) REFERENCES `usuarios`(`u_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
