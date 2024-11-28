const express = require("express");
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'healthyfit'
});

connection.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
  }
  console.log('Conexão bem-sucedida com o banco de dados.');
});

  app.post("/saveImc",(req,res) =>{
    const {altura, peso, imc} = req.body;

    if (!altura || !peso || !imc) {
        return res.status(400).send("Dados incompletos!");
    }
    console.log("Requisição chegou");

    const query = "INSERT INTO imc_data (altura, peso, imc) VALUES (?, ?, ?)";

    connection.query(query, [altura, peso, imc], (err, result) => {
        if (err) {
          console.error("Erro ao salvar:", err);
          res.status(500).send("Erro ao salvar.");
        } else {
          res.status(200).send("Dados salvos com sucesso!");
        }
      });
    });

  // Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor backend rodando na porta 3000");
});