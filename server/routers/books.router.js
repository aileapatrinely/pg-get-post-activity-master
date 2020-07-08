const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/api/books', (req, res) => {
  const queryText = `SELECT * FROM "books" ORDER BY "author" ASC;`;
  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/api/books', (req, res) => {
  const queryText = `INSERT INTO "songs"("title", "author", "published")
    VALUES($1, $2, $3);`;
  pool
    .query(queryText, [req.body.title, req.body.author, req.body.published])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
