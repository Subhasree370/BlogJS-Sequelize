const express = require('express');
const { adminHome, getAddBlog, postAddBlog, viewBlog, viewSingleBlog, editBlog, updateBlog, deleteBlog } = require('../controllers/admin');
const router = express.Router();

router.get('/', adminHome);
router.get('/add-blog', getAddBlog);
router.post('/add-blog', postAddBlog);

router.get('/view-blog', viewBlog);
router.get('/view-single-blog/:blogId', viewSingleBlog);

router.get('/edit-blog/:blogId', editBlog);
router.post('/update-blog', updateBlog);

router.get('/delete-blog/:blogId', deleteBlog);


module.exports = router;