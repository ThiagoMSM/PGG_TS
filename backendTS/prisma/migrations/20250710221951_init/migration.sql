-- CreateTable
CREATE TABLE `produtos` (
    `p_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_nome` VARCHAR(100) NOT NULL,
    `p_descricao` VARCHAR(255) NULL,
    `p_codigo_barras` VARCHAR(255) NULL,
    `p_qtdeConsumo` INTEGER NOT NULL,
    `p_catid` INTEGER NULL,

    UNIQUE INDEX `produtos_p_catid_key`(`p_catid`),
    PRIMARY KEY (`p_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `c_id` INTEGER NOT NULL AUTO_INCREMENT,
    `c_nome` VARCHAR(50) NOT NULL,
    `c_subcat` INTEGER NOT NULL,

    PRIMARY KEY (`c_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lotes` (
    `l_id` INTEGER NOT NULL AUTO_INCREMENT,
    `l_apelido` VARCHAR(100) NOT NULL,
    `l_datacompra` DATE NOT NULL,
    `l_datavalidade` DATE NULL,
    `l_qtde` INTEGER NOT NULL,
    `l_vlrcompra` DOUBLE NOT NULL,
    `l_vlrvenda` DOUBLE NOT NULL,
    `l_produtoid` INTEGER NOT NULL,
    `l_idnota` INTEGER NOT NULL,
    `l_idfornecedor` INTEGER NOT NULL,

    UNIQUE INDEX `lotes_l_idnota_key`(`l_idnota`),
    PRIMARY KEY (`l_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notasfiscais` (
    `n_id` INTEGER NOT NULL AUTO_INCREMENT,
    `n_numero` VARCHAR(30) NOT NULL,
    `n_data` DATETIME NOT NULL,
    `n_chave` VARCHAR(100) NOT NULL,
    `n_xml` LONGTEXT NOT NULL,
    `n_emissor` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`n_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fornecedores` (
    `f_id` INTEGER NOT NULL AUTO_INCREMENT,
    `f_nome` VARCHAR(100) NOT NULL,
    `f_cnpj` VARCHAR(30) NOT NULL,
    `f_endereco` VARCHAR(100) NOT NULL,
    `f_telefone` VARCHAR(20) NOT NULL,
    `f_email` VARCHAR(150) NOT NULL,
    `f_status` ENUM('ATIVO', 'INATIVO', 'OUTRO') NOT NULL,

    PRIMARY KEY (`f_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `u_id` INTEGER NOT NULL AUTO_INCREMENT,
    `u_nome` VARCHAR(150) NOT NULL,
    `u_email` VARCHAR(150) NOT NULL,
    `u_senha` VARCHAR(50) NOT NULL,
    `u_grupoacesso` INTEGER NOT NULL,
    `u_cpf` VARCHAR(14) NOT NULL,

    UNIQUE INDEX `usuarios_u_email_key`(`u_email`),
    PRIMARY KEY (`u_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movimentos` (
    `m_id` INTEGER NOT NULL AUTO_INCREMENT,
    `m_qtde` INTEGER NOT NULL,
    `m_tipo` ENUM('ENTRADA', 'SAIDA', 'OUTRO') NOT NULL,
    `m_cliente` VARCHAR(100) NOT NULL,
    `m_data` TIMESTAMP(3) NOT NULL,
    `m_loteid` INTEGER NOT NULL,
    `m_idnota` INTEGER NOT NULL,
    `m_responsavelid` INTEGER NOT NULL,

    UNIQUE INDEX `movimentos_m_idnota_key`(`m_idnota`),
    PRIMARY KEY (`m_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_p_catid_fkey` FOREIGN KEY (`p_catid`) REFERENCES `categorias`(`c_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lotes` ADD CONSTRAINT `lotes_l_produtoid_fkey` FOREIGN KEY (`l_produtoid`) REFERENCES `produtos`(`p_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lotes` ADD CONSTRAINT `lotes_l_idnota_fkey` FOREIGN KEY (`l_idnota`) REFERENCES `notasfiscais`(`n_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lotes` ADD CONSTRAINT `lotes_l_idfornecedor_fkey` FOREIGN KEY (`l_idfornecedor`) REFERENCES `fornecedores`(`f_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentos` ADD CONSTRAINT `movimentos_m_loteid_fkey` FOREIGN KEY (`m_loteid`) REFERENCES `lotes`(`l_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentos` ADD CONSTRAINT `movimentos_m_idnota_fkey` FOREIGN KEY (`m_idnota`) REFERENCES `notasfiscais`(`n_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentos` ADD CONSTRAINT `movimentos_m_responsavelid_fkey` FOREIGN KEY (`m_responsavelid`) REFERENCES `usuarios`(`u_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
