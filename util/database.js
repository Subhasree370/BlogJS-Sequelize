const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog-sequelize', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;