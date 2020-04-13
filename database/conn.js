const Sequelize = require('sequelize')
require ('dotenv').config()

const host = process.env.DB_HOST
const database = process.env.DB
const user = process.env.DB_USER
const pw = process.env.DB_PWW


module.exports = new Sequelize(database, user, pw, {
  host,
  dialect: 'mssql',
  options:{
    trustServerCertificate: false
  }
});
