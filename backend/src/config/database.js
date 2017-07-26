const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://renanlopes:openpassword2@ds043037.mlab.com:43037/heroku_pvrgcv8h', { useMongoClient: true } )
