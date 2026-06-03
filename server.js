const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.post("/chat", (req, res) => {
    const mensaje = req.body.message || "";

    console.log("Mensaje recibido:", mensaje);

    res.json({
        reply: "Hola Roblox, recibí tu mensaje: " + mensaje
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
