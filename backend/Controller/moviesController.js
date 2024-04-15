const db = require("../database/db");


// GET all movies
async function movies(req, res) {
    const result = await db.getDb().collection('netflix-movies').find({}).toArray();
    res.send(result);
}

// GET all shows
async function shows(req, res) {
    const result = await db.getDb().collection('netflix-shows').find({}).toArray();
    res.send(result);
}

// GET particular movie or show
async function details(req, res) {
    const name = req.params.name;
    const type = String(req.query.type)
    console.log(type)

    if(type === 'movie'){
        const result = await db.getDb().collection('netflix-movies').findOne({title: name});
        return res.send(result);

    } else if(type == 'show') {
        const result = await db.getDb().collection('netflix-shows').findOne({title: name});
        return res.send(result);
    }
}

async function allContent(req, res) {
    const response = await db.getDb().collection('netflix-all').find({}).toArray();
    res.send(response);
}

module.exports = {
    movies: movies,
    shows: shows,
    details: details,
    allContent: allContent
}