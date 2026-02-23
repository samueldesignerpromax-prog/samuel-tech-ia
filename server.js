const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/produtos", (req, res) => {
    res.json([
        { nome: "E-book IA", preco: 29.90 },
        { nome: "Pack Prompts Pro", preco: 49.90 },
        { nome: "Chatbot para Empresas", preco: 199.90 }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});
