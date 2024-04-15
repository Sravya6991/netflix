const express = require("express");
const db = require("./database/db");
const routers = require("./Routes/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, x-access-token, Authorization");
    next();
});

app.use(routers);

db.connectToDb().then((err, client) => {
    if(err) console.log(err);
    app.listen(3500, () => console.log("server is running"));
});

