const express = require("express");
const router = express.Router();
const Blogs = require("../services/blogService");
const upload = require("../middleware/fileUpload");


router.post('/', upload.single('image'), Blogs.create);

router.get('/getAll', Blogs.getAll);

router.get('/singleBlog/:Id', Blogs.getOne);


module.exports = router;
