const express = require('express');
const app = express();

const pessoas = require('./pessoas')

app.get('/', (req, res) => {
    let cpf = req.query.cpf

    let pessoaEncontrada = pessoas.pessoas.find(pessoas => pessoas.cpf == cpf)

    res.json({pessoa: pessoaEncontrada})

})

app.listen(8080, () => {
    let data = new Date();
    
    console.log(`Servidor iniciado em: ${data.toLocaleString()}`)
})
