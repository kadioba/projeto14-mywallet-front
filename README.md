# My Wallet - Gerenciador de finanças pessoais
<div align="center">
  <img height="400em" src="https://github.com/kadioba/projeto14-mywallet-front/blob/main/demo-images/iPhone%208%20-%201.png">
  <img height="400em" src="https://github.com/kadioba/projeto14-mywallet-front/blob/main/demo-images/iPhone%208%20-%202.png">
  <img height="400em" src="https://github.com/kadioba/projeto14-mywallet-front/blob/main/demo-images/iPhone%208%20-%203.png">
  <img height="400em" src="https://github.com/kadioba/projeto14-mywallet-front/blob/main/demo-images/iPhone%208%20-%206.png">
</div>

## Descrição

O MyWallet é uma aplicação de gerenciamento de finanças pessoais projetada para ajudar os usuários a acompanhar suas receitas e despesas. Ele fornece uma interface intuitiva para registrar transações financeiras e calcular o saldo do usuario. O projeto foi motivado pela necessidade de uma ferramenta de gerenciamento financeiro amigável e pelo desejo de criar uma aplicação prática.
A vesrão demo pode ser acessada em https://my-wallet-rrtg.onrender.com

## Sobre

O projeto consiste em uma SPA (Single Page Application) na qual os usuarios podem se cadastrar e já começar a marcar suas transações de entradas e saidas, com uma lista detalhando os dados das suas movimentações. Algumas das principais funcionalidades do MyWallet incluem:

- Registro de usuário com nome, e-mail e senha
- Funcionalidade de login
- Listagem de transações de entrada e saída
- Cadastro de entradas e saidas
- Edição e exclusão de transações
- Cálculo de saldo em tempo real

### Próximos passos
- Implementar visualização de dados para insights financeiros
- Adicionar funcionalidades de orçamento e metas
- Incluir exportação de dados e geração de relatórios

## Tecnologias
- React: Utilizamos o framework React para desenvolver a interface do usuário, aproveitando sua flexibilidade e eficiência na criação de componentes reutilizáveis.
- Styled Components: A estilização da aplicação foi feita com Styled Components, uma biblioteca que permite criar estilos CSS de forma mais organizada e dinâmica, mantendo o código limpo e fácil de manter.
- Axios: Para realizar requisições HTTP à API do backend, utilizamos o Axios, uma biblioteca que simplifica a comunicação entre o frontend e o backend, tornando as operações de rede mais eficientes e confiáveis.

## Como Executar
Siga estas etapas para baixar e configurar o projeto:

1. Clone o repositório MyWallet Backend para a sua máquina local.
```bash
git clone https://github.com/kadioba/projeto14-mywallet-front
cd projeto14-mywallet-front
```

2. Navegue até o diretório do repositório do backend (https://github.com/kadioba/projeto14-mywallet-back/) e siga as instruções no README para executar o servidor backend. Uma outra opção é utilizar o backend que já está implantado como uma API REST em https://my-wallet-rrtg.onrender.com.

3. Crie um arquivo .env no diretório do projeto frontend e defina as seguintes variáveis de ambiente:

```bash
REACT_APP_API_URL=https://my-wallet-rrtg.onrender.com
PORT=3000
```

4. Instale as dependências do projeto executando o seguinte comando no diretório do projeto frontend:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento do frontend:
```bash
npm start
```

Agora você pode acessar a aplicação MyWallet frontend localmente em http://localhost:3000.

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Sinta-se à vontade para explorar a aplicação e gerenciar suas finanças pessoais de forma eficaz! Se encontrar algum problema ou tiver sugestões de melhorias, não hesite em reportá-los.

Aproveite o uso do MyWallet! 🚀
