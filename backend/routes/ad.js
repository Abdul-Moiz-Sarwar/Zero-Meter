const express = require('express')
const router = express.Router()
const ad = require('../controllers/ad')
const account = require('../controllers/accounts')

//get all ads
router.get('/', account.verifyToken, ad.getAds)

//get one ad
router.get('/:id', account.verifyToken, ad.getAd)

//add one ad
router.post('/', account.verifyToken, account.isDealer, ad.addAd)

//update one ad
router.put('/:id', account.verifyToken, account.isDealer, ad.updateAd)

//delete one ad
router.delete('/:id', account.verifyToken, account.isDealer, ad.deleteAd)

module.exports = router