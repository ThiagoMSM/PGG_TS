# 🚀 Como Rodar o Backend

Siga os passos abaixo para acessar o servidor e iniciar o backend da aplicação.

---

## 🖥️ 1. Acessar o Servidor via SSH

1. **Abra o Prompt de Comando (CMD) como administrador**

2. **Execute o seguinte comando:**

ssh -L 3307:localhost:3306 xxxx@rigeltech.zapto.org

> Substitua `xxxx` pelo nome de usuário.

3. **Digite a senha** quando for solicitado.

Esse comando cria um túnel seguro que conecta:

- **Sua porta local 3307** → **Porta 3306 (MySQL) do servidor**

Mantenha o cmd ABERTO enquanto estiver usando o backend, fechando o cmd você fecha a conexão com o servidor.