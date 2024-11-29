# Calculadora de IMC - HealthyFit

##** Apresentação**

A **Calculadora de IMC** é uma aplicação web simples que permite aos usuários calcular o Índice de Massa Corporal (IMC), visualizar a classificação do IMC (como peso normal, sobrepeso, obesidade, etc.), e salvar os dados calculados em um banco de dados MySQL.

**A aplicação é dividida em duas partes:**
- **Frontend**: Interface de usuário criada com React.js, utilizando o Vite como bundler.
- **Backend**: Servidor em Node.js com Express, conectado ao banco de dados MySQL para salvar e classificar os dados do IMC.

**## Objetivo**

O objetivo principal dessa aplicação é calcular o IMC a partir da altura e peso fornecidos pelo usuário, classificar o resultado de acordo com a tabela de IMC e salvar os dados no banco de dados para posterior uso.

**## Funcionalidades**

- Cálculo do IMC com base em altura e peso.
- Classificação do IMC em: Abaixo do Peso, Peso Normal, Sobrepeso e Obesidade.
- Armazenamento dos dados calculados (altura, peso, IMC) no banco de dados MySQL.
- Interface de usuário simples com React.js.
- Backend em Node.js utilizando Express para fornecer as APIs necessárias.

**## Instalação de Dependências**

### 1. Instalar dependências do Frontend (React)
No diretório do frontend, execute os seguintes passos:


**# Clone o repositório**
git clone https://github.com/Wesleeysg/calculadora-imc.git

**# Acesse a pasta do frontend**
cd calculadora-imc

**# Instale as dependências**
npm install
npm install axios

2. Instalar dependências do Backend (Node.js + MySQL)
No diretório do backend, execute os seguintes passos:

**# Acesse a pasta do backend**
cd backend

**# Instale as dependências**
npm install

**3. Configurar Banco de Dados MySQL**
Crie o banco de dados e a tabela no MySQL utilizando o seguinte script:

CREATE DATABASE healthyfit;

USE healthyfit;

CREATE TABLE imc_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  altura FLOAT NOT NULL,
  peso FLOAT NOT NULL,
  imc FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Certifique-se de que o banco de dados MySQL está rodando na sua máquina local ou em um servidor acessível.

No arquivo server.cjs, configure os dados de conexão com o MySQL (caso necessário):

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Substitua pela sua senha do MySQL
  database: 'healthyfit'
});

**4. Rodando a Aplicação**
4.1 Rodando o Backend
No diretório do backend, execute o seguinte comando para iniciar o servidor Node.js:

node server.cjs
Isso iniciará o servidor na porta 3000, que é onde o frontend irá se comunicar.

**4.2 Rodando o Frontend**
No diretório do frontend, execute o seguinte comando para iniciar a aplicação React:

npm run dev
Isso iniciará o servidor de desenvolvimento React na porta 3000 (caso a porta do backend esteja ocupada, o React usará outra porta automaticamente).

**4.3 Acessando a Aplicação**
Abra seu navegador e vá até http://localhost:5173 para acessar a aplicação. Você poderá inserir altura e peso para calcular o IMC, visualizar a classificação e reiniciar os cálculos.

**Estrutura do Projeto**

calculadora-imc/
│
|── src/                  #Arquivos do FrontEnd(React)
│     ├── App.jsx
│     ├── App.css
│     └── ...
│
├── backend/                 # Arquivos do backend (Node.js)
│   ├── server.cjs
│   └── ...
│
└── README.md

**Considerações Finais**
A aplicação está utilizando o banco de dados MySQL para armazenar os dados de altura, peso e IMC.
O cálculo do IMC é feito no frontend e a classificação é realizada via uma API no backend.
Certifique-se de que o banco de dados esteja corretamente configurado antes de iniciar o backend.
Caso queira alterar o banco de dados ou a conexão, basta modificar o arquivo server.cjs no backend.

**### Como Usar**

1. **Clonando o repositório**: Use `git clone` para obter o código do repositório.
2. **Instalando as dependências**: Execute `npm install` nas pastas de frontend e backend para instalar as bibliotecas necessárias.
3. **Configurando o banco de dados**: Crie o banco de dados e a tabela conforme descrito.
4. **Rodando o backend e frontend**: Use `npm start` no frontend e `node server.cjs` no backend para rodar a aplicação.

Com essas etapas, você estará pronto para executar a aplicação em sua máquina local.
