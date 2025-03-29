# API REST Backend Node.js - Atividade Programação II

Este projeto foi desenvolvido durante as disciplinas de Programação I e II do curso de Engenharia de Software da Unoeste. A proposta era criar separadamente um frontend e um backend e, ao final, integrar ambos.

## Funcionalidades

Esta API fornece endpoints para gerenciar clientes, fornecedores e produtos. As principais funcionalidades incluem:

- **Clientes**:
  - Cadastro de clientes
  - Consulta de clientes
  - Atualização de clientes (total e parcial)
  - Exclusão de clientes

- **Fornecedores**:
  - Cadastro de fornecedores
  - Consulta de fornecedores
  - Atualização de fornecedores (total e parcial)
  - Exclusão de fornecedores

- **Produtos**:
  - Cadastro de produtos
  - Consulta de produtos
  - Atualização de produtos (total e parcial)
  - Exclusão de produtos

## Endpoints

### Clientes
- `POST /api/clientes`: Cadastrar um novo cliente
- `GET /api/clientes`: Consultar todos os clientes
- `PUT /api/clientes/:id`: Atualizar um cliente
- `PATCH /api/clientes/:id`: Atualizar parcialmente um cliente
- `DELETE /api/clientes/:id`: Excluir um cliente

### Fornecedores
- `POST /api/fornecedores`: Cadastrar um novo fornecedor
- `GET /api/fornecedores`: Consultar todos os fornecedores
- `PUT /api/fornecedores/:id`: Atualizar um fornecedor
- `PATCH /api/fornecedores/:id`: Atualizar parcialmente um fornecedor
- `DELETE /api/fornecedores/:id`: Excluir um fornecedor

### Produtos
- `POST /api/produtos`: Cadastrar um novo produto
- `GET /api/produtos`: Consultar todos os produtos
- `PUT /api/produtos/:id`: Atualizar um produto
- `PATCH /api/produtos/:id`: Atualizar parcialmente um produto
- `DELETE /api/produtos/:id`: Excluir um produto

## Tecnologias Utilizadas

### Bibliotecas Principais

- **Express**: Framework para construção de APIs REST.
- **Sequelize**: ORM para interação com o banco de dados.
- **dotenv**: Carregar variáveis de ambiente a partir de um arquivo `.env`.
- **express-validator**: Middleware para validação de dados.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

### Banco de Dados

- **MySQL**: Banco de dados relacional utilizado para armazenar os dados da aplicação.

## Diagramas do Projeto

### Diagrama de Classes

```mermaid
classDiagram
    class App {
    }

    class ClienteController {
        +cadastrarCliente(req, res)
        +consultarClientes(req, res)
        +atualizarCliente(req, res)
        +atualizarClienteParcial(req, res)
        +excluirCliente(req, res)
    }

    class FornecedorController {
        +cadastrarFornecedor(req, res)
        +consultarFornecedores(req, res)
        +atualizarFornecedor(req, res)
        +atualizarFornecedorParcial(req, res)
        +excluirFornecedor(req, res)
    }

    class ProdutoController {
        +cadastrarProduto(req, res)
        +consultarProdutos(req, res)
        +atualizarProduto(req, res)
        +atualizarProdutoParcial(req, res)
        +excluirProduto(req, res)
    }

    class ClienteRoutes {
        +post("/")
        +get("/")
        +put("/:id")
        +patch("/:id")
        +delete("/:id")
    }

    class FornecedorRoutes {
        +post("/")
        +get("/")
        +put("/:id")
        +patch("/:id")
        +delete("/:id")
    }

    class ProdutoRoutes {
        +post("/")
        +get("/")
        +put("/:id")
        +patch("/:id")
        +delete("/:id")
    }

    class Cliente {
        -id: INTEGER
        -cpf: STRING
        -nomeCompleto: STRING
        -endereco: STRING
        -cidade: STRING
        -estado: STRING
        -cep: STRING
    }

    class Fornecedor {
        -id: INTEGER
        -cnpj: STRING
        -razaoSocial: STRING
        -telefone: STRING
        -email: STRING
        -endereco: STRING
    }

    class Produto {
        -id: INTEGER
        -codigo: STRING
        -nome: STRING
        -descricao: STRING
        -preco: FLOAT
        -categoria: STRING
        -estoque: INTEGER
    }

    App --> ClienteRoutes
    App --> FornecedorRoutes
    App --> ProdutoRoutes

    ClienteRoutes --> ClienteController
    FornecedorRoutes --> FornecedorController
    ProdutoRoutes --> ProdutoController

    ClienteController --> Cliente
    FornecedorController --> Fornecedor
    ProdutoController --> Produto

```

### Diagrama de Sequência - Cliente case

```mermaid
sequenceDiagram
    actor User

    User->>App: Request to /api/clientes (POST)
    App->>ClienteRoutes: Route request
    ClienteRoutes->>ClienteController: Call cadastrarCliente
    ClienteController->>Cliente: Create new Cliente
    Cliente->>Database: Save Cliente
    Database-->>Cliente: Return saved Cliente
    Cliente-->>ClienteController: Return saved Cliente
    ClienteController-->>ClienteRoutes: Return response
    ClienteRoutes-->>App: Return response
    App-->>User: Return response (201 Created)

```

### Diagrama de Camada de Apresentação

```mermaid
classDiagram
    direction LR

    class database {
        <<Database>>
        Database (Sequelize)
    }

    class index {
        <<Component>>
        Index.js
    }

    class authMiddleware {
        <<Middleware>>
        Authentication.js
    }
    
    class loginVerification {
        <<Middleware>>
        LoginVerification.js
    }

    class clienteValidator {
        <<Validator>>
        ClienteValidator.js
    }

    class clienteRoutes {
        <<Routes>>
        ClienteRoutes.js
    }

    class clienteController {
        <<Controller>>
        ClienteController.js
    }

    class clienteModel {
        <<Model>>
        Cliente.js
    }

    %% Repeat similar classes for Fornecedor and Produto
    class fornecedorValidator {
        <<Validator>>
        FornecedorValidator.js
    }
    class produtoValidator {
        <<Validator>>
        ProdutoValidator.js
    }
    %% ... (other classes omitted for brevity)

    %% Server connections
    index --> clienteRoutes
    index --> fornecedorRoutes
    index --> produtoRoutes

    %% Routes to controllers
    clienteRoutes --> clienteController
    fornecedorRoutes --> fornecedorController
    produtoRoutes --> produtoController

    %% Controllers to models
    clienteController --> clienteModel
    fornecedorController --> fornecedorModel
    produtoController --> produtoModel

    %% Models to database
    clienteModel --> database
    fornecedorModel --> database
    produtoModel --> database

    %% Middleware applied to routes
    clienteRoutes ..> authMiddleware: uses
    fornecedorRoutes ..> authMiddleware: uses
    produtoRoutes ..> authMiddleware: uses

    %% Validations before controllers
    clienteRoutes ..> clienteValidator: validates with
    fornecedorRoutes ..> fornecedorValidator: validates with
    produtoRoutes ..> produtoValidator: validates with
```



## Configuração do Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/lasbrDev/backend-node-programacao-2.git
    ```
2. Instale as dependências
```bash 
npm install
```
3. Configure as variáveis de ambiente no arquivo *.env*:
```bash
DB_NAME=<nome_do_banco_de_dados>
DB_USER=<usuario_do_banco_de_dados>
DB_PASSWORD=<senha_do_banco_de_dados>
DB_HOST=<host_do_banco_de_dados>
DB_PORT=<porta_do_banco_de_dados>
APP_PORT=<porta_da_aplicacao>
```
4. Inicie a aplicação

```bash
npm start
```

## Licença

Este projeto está licenciado sob a [MIT LICENSE](LICENSE).