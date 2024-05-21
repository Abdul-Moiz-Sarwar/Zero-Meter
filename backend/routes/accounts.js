const express = require('express');
const router = express.Router();
const account = require("../controllers/accounts");

//user and dealership signup
router.post("/signup", account.signup);

//user and dealership login
router.post("/login", account.login);

//refresh token to another 1hr
router.get("/refresh", account.refreshToken, account.verifyRefresh);

//clear cookies and logout
router.post("/logout", account.verifyToken, account.logout);

//get user details
router.get("/getUser",account.verifyToken, account.getUser)

router.get("/getAllDealers",account.verifyToken, account.getAllDealers)

//for edit profile
router.put("/updateUser", account.verifyToken, account.updateUser);

//get all users
router.get('/getAllUsers', account.verifyToken, account.getAllUsers);

//Delete user
router.put("/deleteUser/:id", account.verifyToken, account.deleteUser);
router.put("/enableUser/:id", account.verifyToken, account.enableUser);

//Delete dealer
router.put('/deleteDealer/:id', account.verifyToken, account.deleteDealer);
router.put('/enableDealer/:id', account.verifyToken, account.enableDealer);

module.exports = router;