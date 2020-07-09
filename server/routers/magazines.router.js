const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const moment = require('moment');
const { each } = require('jquery');

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "magazines" ORDER BY "issue_number" ASC;`;
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

router.post('/', (req, res) => {
  const queryText = `INSERT INTO "magazines"("title", "issue_number", "pages")
    VALUES($1, $2, $3);`;
  pool
    .query(queryText, [req.body.title, req.body.issue_number, req.body.pages])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
