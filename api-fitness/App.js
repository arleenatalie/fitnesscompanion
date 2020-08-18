const express = require ("express");
const cors = require ("cors");

const { heroes, personals }  = require("./data/data");

const app = express();
const PORT = 5000;

app.use(cors()); //middleware
app.use(express.json());

app.get("/hero-workout", (req, res) => res.json(heroes));
app.get("/personal-workout", (req, res) => res.json(personals))

app.listen(PORT, () => console.log(`Server sudah jalan di port ${PORT}`));