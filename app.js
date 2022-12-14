const express = require('express');
const app = express();


const path = require('path'); //path.join use
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const blogRoutes = require("./routes/blog");
const { get404 } = require('./controllers/error');

const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs'); // set template extension for express(ejs, pug, handleBar)
app.set('views', 'views'); // set template folder as views

app.use(express.static(path.join(__dirname, 'public'))); //STatic file settings path

//adminRoutes middleware//
app.use('/admin', adminRoutes);

//blogRoutes middleware//
app.use(blogRoutes);

//404 page not found middleware//
app.use(get404);

sequelize.sync()
.then((result) => {
    console.log(result);
    app.listen(3000);
})
.catch((err) => {
console.log(err);
});