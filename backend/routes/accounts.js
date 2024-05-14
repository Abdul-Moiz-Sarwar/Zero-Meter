const express = require('express');
const router = express.Router();
const user = require("../controllers/accounts");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/refresh", user.refreshToken, user.verifyRefresh);
router.post("/logout", user.verifyToken, user.logout);
router.get("/getUser",user.verifyToken, user.getUser)
module.exports = router;