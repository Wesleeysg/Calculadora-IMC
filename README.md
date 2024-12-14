# Calculadora de IMC - HealthyFit

## **Apresentação**

A **Calculadora de IMC** é uma aplicação web simples que permite aos usuários calcular o **Índice de Massa Corporal (IMC)**, visualizar a classificação do IMC (como **peso normal**, **sobrepeso**, **obesidade**, etc.) e salvar os dados calculados em um **banco de dados MySQL**, permitindo consultá-los em uma tela de histórico posteriormente.

**A aplicação é dividida em duas partes:**
- **Frontend**: Interface de usuário criada com **React.js**, utilizando o **Vite** como bundler.
- **Backend**: Servidor em **Node.js** com **Express**, conectado ao banco de dados **MySQL** para salvar, classificar e buscar os dados do IMC.

---

## **Objetivo**

O objetivo principal dessa aplicação é:
- Calcular o IMC a partir da **altura** e **peso** fornecidos pelo usuário.
- Classificar o resultado de acordo com a tabela de IMC.
- Salvar os dados no banco de dados para consulta posterior.

---

## **Funcionalidades**

- Cálculo do IMC com base em altura e peso fornecidos.
- Classificação do IMC em:
  - Abaixo do Peso
  - Peso Normal
  - Sobrepeso
  - Obesidade
- Consulta do histórico de cálculos do IMC.
- Armazenamento dos dados calculados (**altura**, **peso**, **IMC**) no banco de dados **MySQL**.
- Interface de usuário intuitiva com **React.js**.
- API no backend usando **Node.js** com **Express**.

---

## **Instalação de Dependências**

### 1. Instalar dependências do Frontend (React.js)

No diretório do frontend, execute os seguintes comandos:

```bash
# Clone o repositório
git clone https://github.com/Wesleeysg/calculadora-imc.git

# Acesse a pasta do frontend
cd Calculadora-IMC-main

# Instale as dependências
npm install
npm install react axios react-router-dom date-fns
```

### 2. Instalar dependências do Backend (Node.js + MySQL)

No diretório do backend, execute os seguintes comandos:

```bash
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install
npm install express mysql2 body-parser cors
```

---

## **Configurar Banco de Dados MySQL**

Crie o banco de dados e a tabela no MySQL utilizando o seguinte script:

```sql
CREATE DATABASE healthyfit;

USE healthyfit;

CREATE TABLE imc_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  altura FLOAT NOT NULL,
  peso FLOAT NOT NULL,
  imc FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Certifique-se de que o banco de dados MySQL está rodando localmente ou em um servidor acessível.

No arquivo `server.cjs`, configure os dados de conexão com o MySQL:

```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Substitua pela sua senha do MySQL
  database: 'healthyfit'
});
```

---

## **Rodando a Aplicação**

### 1. Rodando o Backend

No diretório do backend, execute o seguinte comando para iniciar o servidor:

```bash
node server.cjs
```

O servidor iniciará na **porta 3000**.

### 2. Rodando o Frontend

No diretório do frontend, execute o seguinte comando para iniciar a aplicação React:

```bash
npm run dev
```

O servidor de desenvolvimento React iniciará na **porta 5173** (ou outra porta, caso a 5173 esteja ocupada).

### 3. Acessando a Aplicação

Abra seu navegador e acesse:

```
http://localhost:5173
```

Você poderá inserir **altura** e **peso**, calcular o IMC, visualizar a classificação e consultar o histórico dos cálculos.

---

## **Uso na AWS e Ubuntu via SSH no Windows**

Para configurar e executar a aplicação na **AWS EC2** utilizando **Ubuntu**, siga os passos abaixo:

### 1. Conectar ao Servidor AWS via SSH

- Gere um par de chaves no console da AWS ao criar a instância EC2 (arquivo `.pem`).
- Abra o terminal no Windows (via **PowerShell** ou **Git Bash**) e execute:

```bash
ssh -i "seu-arquivo.pem" ubuntu@seu-endereco-ip
```

**Nota**: Substitua `seu-arquivo.pem` pelo caminho do seu arquivo de chave privada e `seu-endereco-ip` pelo IP público da sua instância.

---

### 2. Configurar Ambiente no Ubuntu

No servidor, instale as dependências necessárias:

```bash
# Atualizar pacotes
sudo apt update && sudo apt upgrade -y

# Instalar Node.js e npm
sudo apt install nodejs npm -y

# Instalar MySQL
sudo apt install mysql-server -y
```

---

### 3. Configurar o Banco de Dados MySQL

1. Acesse o MySQL e crie o banco de dados:

```bash
sudo mysql -u root
```

2. Execute o script SQL fornecido anteriormente para criar o banco `healthyfit`.

---

### 4. Clonar o Projeto e Rodar

```bash
# Clonar o repositório
git clone https://github.com/Wesleeysg/calculadora-imc.git

# Acesse o backend e instale as dependências
cd calculadora-imc/backend
npm install

# Inicie o backend
node server.cjs

# Acesse o frontend e instale as dependências
cd ../src
npm install

# Execute o frontend
npm run dev
```

---

### 5. Acessar a Aplicação

No navegador, acesse o IP público da sua instância EC2 e a porta do frontend:

```
http://seu-endereco-ip:5173
```

---

## **Estrutura do Projeto**

```
calculadora-imc/
│
|── src/                  # Arquivos do Frontend (React.js)
│     ├── App.jsx
│     ├── App.css
|     ├── Home.jsx
|     ├── Histórico.jsx
│     └── ...
│
├── backend/              # Arquivos do Backend (Node.js)
│   ├── server.cjs
│   └── ...
│
└── README.md
```

---

## **Considerações Finais**

- O cálculo do IMC é feito no **frontend**, e a classificação é realizada via uma **API** no **backend**.
- O banco de dados **MySQL** armazena os dados calculados (**altura**, **peso**, **IMC**, **timestamp**).
- Certifique-se de que o banco de dados esteja configurado corretamente antes de iniciar o backend.
- Caso queira alterar a conexão com o banco de dados, basta modificar o arquivo `server.cjs`.

---

## **Como Usar**

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/Wesleeysg/calculadora-imc.git
   ```
2. **Instalar as dependências**:
   ```bash
   npm install # Em frontend e backend
   ```
3. **Configurar o banco de dados**:
   - Crie o banco de dados e a tabela conforme descrito.
4. **Rodar o backend e frontend**:
   ```bash
   # Backend
   node server.cjs

   # Frontend
   npm run dev
   ```
5. **Acessar a aplicação**:
   Abra o navegador em `http://localhost:5173`.

Com essas etapas, a aplicação estará pronta para uso localmente.

---

Desenvolvido com ❤️ por **Wesley**
