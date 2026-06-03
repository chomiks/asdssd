require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.post("/chat", async (req, res) => {
    try {
        const mensaje = req.body.message || "";

        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: mensaje
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            reply: "Error al contactar la IA"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
