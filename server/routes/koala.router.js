const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('Connect', () => {
    console.log('Postgres is connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error); 
});

// GET


// POST
koalaRouter.post('/', (req, res) => {
    const newKoala = req.body;
    console.log('newKoala is', req.body);
    const queryText = `
    INSERT INTO "koalas" ("name", "age", "gender", "readyForTransferIn", "notes")
    VALUES ($1, $2, $3, $4, $5);
    `;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransferIn, newKoala.notes])
    .then((result) => {
        res.sendStatus(201);     
    }).catch((err) => {
        console.log('Error querying', queryText, err);
        res.sendStatus(500);
    })

});


// PUT


// DELETE

module.exports = koalaRouter;