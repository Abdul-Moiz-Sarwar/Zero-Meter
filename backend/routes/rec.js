const express = require('express');
const router = express.Router();
const rec = require('../controllers/rec');

router.get("/", rec.getrecs);

module.exports = router;