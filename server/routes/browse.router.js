const express = require('express');
const pool = require('../modules/pool');

const { rejectUnauthenticated} = require('../modules/authentication-middleware');

const router = express.Router();

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user', req.user)
    const sqlQuery = `
    SELECT * FROM discs
    JOIN "user" ON discs.seller_id = "user".id;;
    `
    pool.query(sqlQuery)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('ERROR in GET /api/browse', dbErr);
        res.sendStatus(500);
      })
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;