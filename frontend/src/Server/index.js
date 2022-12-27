const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "Localhost",
    password: "Vaqeel@4949",
    database: "loginuser",
});

app.post("/login", (req, res) => {

    const username = req.express.username;
    const password = req.express.password;

    db.query(
        "SELECT * FROM loginpage WHERE username= ? AND password = ?",
        "INSERT INTO loginpage (username,password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Incorrect username/password" });
            }
        }
    );
});

app.listen(3002, () => {
    console.log("running server");
});