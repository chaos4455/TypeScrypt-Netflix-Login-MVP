import express from 'express';
import authRoutes from './auth.controller';
import {createConnection} from "typeorm";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

createConnection().then(async connection => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch(error => console.error("Erro ao conectar com o banco de dados:", error));
