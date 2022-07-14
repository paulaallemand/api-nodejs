const movies = require("../models/movies.json");

// criar funções que controlam as informações, recebendo as requisições e enviando as respostas

// visualizar todos os filmes

const getAll = (req, res) => {
    console.log("REQUISIÇÃO", req);
    console.log("RESPOSTA", res);

    res.status(200).send(movies);
};

// consumir lista de filmes de api terceira utilizando fetch


module.exports = {
    getAll
};