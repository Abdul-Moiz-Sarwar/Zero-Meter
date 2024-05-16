const express = require('express')
const router = express.Router()
const blog = require('../controllers/blog')
const account = require('../controllers/accounts')

//get all blogs
router.get('/', account.verifyToken, blog.getBlogs)

//get one vehicle
router.get('/:id', account.verifyToken, blog.getBlog)

//add one vehicle
router.post('/', account.verifyToken, account.isAdmin, blog.addBlog)

//update one vehicle
router.put('/:id', account.verifyToken, account.isAdmin, blog.updateBlog)

//delete one vehicle
router.delete('/:id', account.verifyToken, account.isAdmin, blog.deleteBlog)

module.exports = router