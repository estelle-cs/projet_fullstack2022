import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";
import { createHash } from "crypto";

// Connexion à la BDD
const pool = mariadb.createPool({
  host: "localhost", //  mettre url de connexion ici
  user: "me",
  password: "secret",
  database: "fsjs2022",
  port: 3306,
  //connectionLimit: 5,
});

const app = express();

app.use(bodyParser.json());

app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Récupération du token
const findToken = async (token) => {
  const conn = await pool.getConnection();
  return await conn.query(`SELECT * FROM users WHERE token = "${token}"`);
};

const compareToken = async (token) => {
  const findUserToken = await findToken(token);
  if (findUserToken) {
    return findUserToken;
  } else {
    return false;
  }
};

const middleware = async (req, res, next) => {
  const header = req.header("Authorization");
  if (header == undefined) {
    return res.sendStatus(401);
  }
  const token = header.split(" ")[1];
  if (token == undefined || token.length === 0) {
    return res.sendStatus(401);
  }
  if (token != undefined) {
    const comparedToken = await compareToken(token);
    if (comparedToken != undefined) {
      req.user = comparedToken;
      return next();
    } else {
      return res.sendStatus(401);
    }
  }
};

app.get("/shows", async (req, res) => {
  const conn = await pool.getConnection();
  const shows = await conn.query(
    "SELECT name, seasons, platform, rate FROM shows"
  );
  res.json(shows);
});

app.post("/addShow", middleware, async (req, res) => {
  const conn = await pool.getConnection();
  await conn.query(
    `INSERT INTO shows (name, seasons, platform, rate) VALUES ("${req.body.name}",${req.body.seasons},"${req.body.platform}",${req.body.rate})`
  );
});

app.delete("/deleteShow", middleware, async (req, res) => {
  const conn = await pool.getConnection();
  await conn.query(`DELETE FROM shows WHERE name = "${req.body.name}"`);
});

app.post("/login", async (req, res) => {
  const conn = await pool.getConnection();
  const users = await conn.query(
    `SELECT login, mdp FROM users WHERE login = "${req.body.login}"`
  );
  if (users.length == 1 && users[0] != undefined) {
    if (
      users[0].mdp == createHash("sha256").update(req.body.mdp).digest("hex")
    ) {
      console.log("Connecté");
      const rand = Math.random().toString(36).substring(2);
      const token = rand + rand;
      await conn.query(
        `UPDATE users SET token = "${token}" WHERE login = "${req.body.login}"`
      );
      res.status(200).send(token);
    } else {
      console.log("Le mdp est incorrect");
    }
  } else {
    console.log("L'identifiant est incorrect");
  }
});

app.post("/signin", async (req, res) => {
  const conn = await pool.getConnection();
  const securedPassword = createHash("sha256")
    .update(req.body.mdp)
    .digest("hex");
  const users = await conn.query("SELECT login FROM users");
  let exist = false;
  users.forEach((element) => {
    if (element == req.body.login) {
      exist = true;
      return res.status(400);
    }
  });
  if (!exist) {
    await conn.query(
      `INSERT INTO users (name, surname, login, mdp) VALUES ("${req.body.name}","${req.body.surname}","${req.body.login}","${securedPassword}")`
    );
  }
});

app.post("/logout", async (req, res) => {
  const conn = await pool.getConnection();
  await conn.query(
    `UPDATE users SET token = NULL WHERE token = "${req.body.token}"`
  );
});

app.listen(3000);
