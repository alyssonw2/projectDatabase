const express =  require('express');
const app =  express();

const Search = require('../routes/Search');
app.use('/search', Search);

app.use('/home', (req,res, next) => {
    res.status(200).send({
        mensagem: 'ok deu certo'
    });
});

module.exports = app;