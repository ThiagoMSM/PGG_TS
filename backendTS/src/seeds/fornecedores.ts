import { status } from "../generated/prisma"
export const fornecedores =[
    {"nome": "Mercado ABC LTDA", "cnpj": "14543267859056", "endereco": "Rua Restelo 157", "telefone": "11989645943", "email": "Mercado_ABC_LTDA@gmail.com", "status": status.ATIVO},
    {"nome": "Distribuidora XPTO","cnpj": "29837456000188","endereco": "Avenida das Indústrias 2800","telefone": "11999887766","email": "contato@distribuidoraxpto.com", "status": status.ATIVO},
    {"nome": "Atacadão Central","cnpj": "31789456000900","endereco": "Rua dos Trilhos 487","telefone": "11988776655","email": "vendas@atacadaocentral.com", "status": status.ATIVO},
    {"nome": "Alimentos e Bebidas Brasil","cnpj": "56239012000144","endereco": "Rua Bahia 1000","telefone": "11881234123","email": "suporte@alimentosbrasil.com", "status": status.ATIVO}
]