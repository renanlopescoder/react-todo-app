const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://reacttodoapp:reacttodoapp@ds043037.mlab.com:43037/heroku_pvrgcv8h', { useMongoClient: true } )
