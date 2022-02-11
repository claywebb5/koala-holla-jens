const router = require('express');
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
koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas" ORDER BY "age";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('Error making query:', queryText, err);
            res.sendStatus(500);
        });
})

// POST


// PUT


// DELETE

module.exports = koalaRouter;