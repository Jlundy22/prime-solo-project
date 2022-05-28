const express = require('express');
const pool = require('../modules/pool');

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.get('/',  (req, res) => {
  const sqlQuery = `
  SELECT * FROM discs
  JOIN "user" ON discs.seller_id = "user".id
  WHERE "user".id = $1;
    `
  pool.query(sqlQuery, [req.user.id])
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('ERROR in GET /api/browse', dbErr);
      res.sendStatus(500);
    })
});

// router.get('/:id',  (req, res) => {
//   console.log('IN edit get route', req.params.id)
//   const sqlQuery = `
//   SELECT * FROM discs
//   JOIN "user" ON discs.seller_id = "user".id
//   WHERE "disc_id" = $1;
//     `
//   pool.query(sqlQuery, [req.params.id])
//     .then((dbRes) => {
//       res.send(dbRes.rows);
//     })
//     .catch((dbErr) => {
//       console.log('ERROR in GET /api/browse', dbErr);
//       res.sendStatus(500);
//     })
// });

router.delete('/:id', (req, res) => {
    const sqlQuery = 'DELETE FROM discs WHERE disc_id=$1';
    pool
      .query(sqlQuery, [req.params.id])
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('Error in /api/myDiscs DELETE request:', error);
      });
  });

  router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE "discs" 
    SET
    "manufacturer" = $1,
    "mold" = $2,
    "sleepy_scale" = $3,
    "price" = $4,
    "img_path" = $5
    WHERE "disc_id" = $6;
    `;
    const sqlValues = [
      req.body.manufacturer,
      req.body.mold,
      req.body.sleepy_scale,
      req.body.price,
      req.body.img_path,
      req.params.id
    ];
    
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log('UPDATE database error', dbErr);
        res.sendStatus(500);
      });
  });

// router.post('/', (req, res) => {
//   if (req.isAuthenticated()) {
//     console.log('******** in myDiscs,router',req.body.newDiscItem)
//     const sqlQuery = `
//     INSERT INTO "discs" (
//       "manufacturer","mold","sleepy_scale","price","img_path","seller_id"
//       )
//       VALUES($1, $2, $3, $4, $5, $6 );
//     `
//     const sqlValues = [
//       req.body.newDiscItem.manufacturer,
//       req.body.newDiscItem.mold,
//       req.body.newDiscItem.sleepyScale,
//       req.body.newDiscItem.price,
//       req.body.newDiscItem.image,
//       req.user.id
//     ]
//     pool.query(sqlQuery, sqlValues)
//       .then((dbRes) => {
//         res.sendStatus(201)
//       })
//       .catch((dbErr) => {
//         res.sendStatus(500)
//       })
//   } else {
//     res.sendStatus(401)
//   }
// })

module.exports = router;