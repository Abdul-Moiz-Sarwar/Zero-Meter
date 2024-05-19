const express = require('express')
const router = express.Router()
const blog = require('../controllers/blog')
const account = require('../controllers/accounts')

//get all blogs
router.get('/', blog.getBlogs)

//get one blog
router.get('/:id', blog.getBlog)

//add one blog
router.post('/', account.verifyToken, account.isAdmin, blog.addBlog)

//update one blog
router.put('/:id', account.verifyToken, account.isAdmin, blog.updateBlog)

//delete one blog
router.delete('/:id', account.verifyToken, account.isAdmin, blog.deleteBlog)

module.exports = router