const express = require("express");
const routes = require("./routes");
const database = require("./database");
const cors = require("cors");
const PORT = process.env.PORT || 8001;
const app = express();

database.temConexao();

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}!`));
app.use(express.json());
app.use(cors());
app.use(routes);
