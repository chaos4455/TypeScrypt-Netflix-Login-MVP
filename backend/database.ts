import { createConnection } from "typeorm";
import { User } from "./user.entity";

createConnection({
    type: "sqlite",
    database: "mydb.sqlite",
    entities: [User],
    synchronize: true,
    logging: false
}).then(() => {
    console.log("Conexão com o banco de dados estabelecida.");
}).catch(error => console.log("Erro ao conectar com o banco de dados:", error));
