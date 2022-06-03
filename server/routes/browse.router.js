const express = require('express');
const pool = require('../modules/pool');

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
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

router.post('/', rejectUnauthenticated,(req, res) => {
  if (req.isAuthenticated()) {
    const sqlQuery = `
    INSERT INTO "discs" (
      "manufacturer","mold","sleepy_scale","price","img_path","seller_id"
      )
      VALUES($1, $2, $3, $4, $5, $6 );
    `
    const sqlValues = [
      req.body.manufacturer,
      req.body.mold,
      req.body.sleepyScale,
      req.body.price,
      req.body.image,
      req.user.id
    ]
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201)
      })
      .catch((dbErr) => {
        res.sendStatus(500)
      })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router;