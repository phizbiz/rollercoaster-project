const mongoose = require('mongoose')
const regionSchema = require('./region')
const rollercoasterSchema = require('./rollercoaster')

const Region = mongoose.model('Region', regionSchema)
const Rollercoaster = mongoose.model('Rollercoaster', rollercoasterSchema)

module.exports = { Region, Rollercoaster }
