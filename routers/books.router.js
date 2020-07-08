const express = require('express');
const router = express.Router();
const pool = require('..modules/pool');

router.get('/api/books', (req, res) => {
  const queryText = 'SELECT * FROM "books";';
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

module.exports = router;
