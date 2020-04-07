const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/*
* Tipos de recursos
* 
* Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) (req.query)
* Route params: Parâmetros utilizados para identificar recursos (req.params)
* Request body: Corpo da requisição, utilizado para criar ou alterar recursos (req.body)
*/

app.listen(3333);