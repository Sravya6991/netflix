const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

let database;

async function connect() {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    database = client.db("netflix");
}

function getDb() {
    if(!database) {
        throw({message: "database connection not established"});
    } else {
        return database;
    }
}

module.exports = {
    connectToDb: connect,
    getDb: getDb
}
