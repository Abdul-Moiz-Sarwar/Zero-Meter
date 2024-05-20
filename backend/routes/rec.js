const rec = require('../controllers/rec');
const express = require('express');
const router = express.Router();
router.get("/", rec.getrecs);

module.exports=router;