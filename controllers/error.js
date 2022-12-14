//named exports examples

exports.get404 = (req, res) =>{
    // res.sendFile(path.join(__dirname, 'views', '404.html'));  
    res.render('404', {pageTitle:"404 not found", content: "404 page not found"});
}

exports.get403 = (req, res) =>{
    // res.sendFile(path.join(__dirname, 'views', '404.html'));  
    res.render('404', {pageTitle:"403", content: "403 forbidden"});
}