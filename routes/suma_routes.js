var miRouter = require('express').Router()
var suma_service = require('../services/suma_service');

miRouter.get('/', (req, res) => {
    res.send('No hay valores.')
});

miRouter.get('/:val1', (req, res) => {
    res.send('Deben de ser dos valores.')
});

miRouter.get('/:val1/:val2', (req, res) => {
    var val1 = req.params.val1;
    var val2 = req.params.val2;
    resultado = suma_service.obtenerSumaValores(val1, val2);
    //res.send(resultado);
    res.send(resultado.toString());
    //res.send(JSON.stringify(resultado.toString()));
});

module.exports = miRouter