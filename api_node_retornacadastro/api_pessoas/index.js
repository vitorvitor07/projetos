const express = require('express');
const app = express();

const pessoas = require('./pessoas')

app.get('/', (req, res) => {
    let cpf = req.query.cpf

    let pessoaEncontrada = pessoas.pessoas.find(pessoas => pessoas.cpf == cpf)
    
    if (pessoaEncontrada == undefined) {
        res.status(400).json({'Erro': 'CPF não cadastrado'})
    } else {
        res.json({pessoa: pessoaEncontrada})
    }
})

app.listen(8080, () => {
    let data = new Date();
    
    console.log(`Servidor iniciado em: ${data.toLocaleString()}`)
})
