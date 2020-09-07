const express = require('express');
const db = require('../db');
const { request } = require('express');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        let results = await db.all();
        res.json(results.name);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.post('/', (req, res) => {
    res.send(req.body.title)
})

module.exports = router;