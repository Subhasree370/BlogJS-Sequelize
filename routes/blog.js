const express = require('express');
const router = express.Router();
const path = require('path');
const { getHome, getAllBlog } = require('../controllers/blog');


router.get('/', getHome);
router.get('/view-blog', getAllBlog);


module.exports = router;  //default export

