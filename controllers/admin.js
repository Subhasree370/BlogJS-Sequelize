const Blog = require('../models/blog');

exports.adminHome = (req, res, next) => {
    res.send("<h1>admin 1</h1>");
}

exports.getAddBlog = (req, res, next) => {
    res.render('admin/addBlog', { pageTitle: "Add BLogs" });
}

exports.postAddBlog = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const status = 1;

    Blog.create({
        title: title,
        content: content,
        author: author,
        status: status
    }).then(() => {
        res.redirect("/admin/view-blog");
    })
        .catch(error => {
            console.log(error);
        });
}

exports.viewBlog = (req, res, next) => {
    Blog.findAll({ raw: true })
        .then(resultData => {
            // console.log("subhasree", resultData, "subhasree"); // {raw:true} used to console the data
            res.render('admin/viewblog', { pageTitle: "View All BLogs", data: resultData });
        })
        .catch(error => {
            console.log(error);
        });
}


exports.viewSingleBlog = (req, res, next) => {
    const blogId = req.params.blogId;

    console.log(req.query.affid);
    console.log(req.query.clickid);
    Blog.findByPk(blogId)
        .then((resultData) => {
            res.render('admin/singleblog', { pageTitle: resultData.title, blog: resultData });
        })
        .catch(error => {
            console.log(error);
        });
}


exports.editBlog = (req, res, next) => {
    const blogId = req.params.blogId;

    Blog.findByPk(blogId)
        .then((resultData) => {
            res.render('admin/editblog', { pageTitle: resultData.title, blog: resultData });
        })
        .catch(error => {
            console.log(error);
        });
}


exports.updateBlog = (req, res, next) => {
    const id = req.body.blogid;
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const status = 1;

    Blog.update({
        title: title,
        content: content,
        author: author,
        status: status
    }, {
        where: { id: id },
    })
        .then(() => {
            res.redirect(`/admin/edit-blog/${id}`);
        })
        .catch(error => {
            console.log(error);
        });
}



exports.deleteBlog = (req, res, next) => {
    const blogId = req.params.blogId;

    Blog.findByPk(blogId)
        .then((resultData) => {
            resultData.destroy();
        }).then(() => {
            res.redirect(`/admin/view-blog/`);
        })
        .catch(error => {
            console.log(error);
        });
}

