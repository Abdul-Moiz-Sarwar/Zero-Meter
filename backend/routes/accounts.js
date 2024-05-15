const express = require('express');
const router = express.Router();
const account = require("../controllers/accounts");

router.post("/signup", account.signup);
router.post("/login", account.login);
router.get("/refresh", account.refreshToken, account.verifyRefresh);
router.post("/logout", account.verifyToken, account.logout);
router.get("/getUser",account.verifyToken, account.getUser)
module.exports = router;