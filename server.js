const express =  require('express');
const cors = require('cors'); //para autorizar acesso externo a sua aplicação
const mongoose = require('mongoose'); //ORM para Banco de dados não relacionais
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json()); //Para usar pacotes em json na sua aplicação
app.use(cors()); //para autorizar acesso externo a sua aplicação

//Iniciando do DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true, useUnifiedTopology: true});
//require('./src/models/Product');
requireDir("./src/models"); //puxa todos os arquivos 


//Rotas
app.use("/api", require("./src/routes"))

app.listen(3001);