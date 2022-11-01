const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const { Region, Rollercoaster } = require('./models')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
// app.use() middleware here ^ ///////////////////

//ROUTES

//REGIONS

// read all regions --> GET
app.get('/regions', async (req, res) => {
  let allRegions = await Region.find({})
  res.json(allRegions)
})

// read all coasters by region --> GET
app.get('/region/:id', async (req, res) => {
  const rollercoasterRegion = await Rollercoaster.find({
    region: req.params.id
  })
  res.json(rollercoasterRegion)
})

// read one region --> GET
app.get('/regions/:id', async (req, res) => {
  let foundRegion = await Region.findById(req.params.id)
  res.json(foundRegion)
})

// create regions --> POST
app.post('/regions', async (req, res) => {
  let createdRegion = await Region.create(req.body)
  res.json(createdRegion)
})

// ROLLERCOASTER

// read all rollercoasters --> GET
app.get('/rollercoasters', async (req, res) => {
  const allRollercoasters = await Rollercoaster.find({})
  res.json(allRollercoasters)
})

// create rollercoasters --> POST
app.post('/rollercoasters', async (req, res) => {
  let createdRollercoaster = await Rollercoaster.create(req.body)
  res.json(createdRollercoaster)
})

// read one rollercoaster --> GET
app.get('/rollercoasters/:id', async (req, res) => {
  let foundRollercoaster = await Rollercoaster.findById(req.params.id).populate(
    'region'
  )

  res.json(foundRollercoaster)
})

// delete one rollercoaster --> DELETE
app.delete('/rollercoasters/:id', async (req, res) => {
  let deletedRollercoaster = await Rollercoaster.findByIdAndDelete(
    req.params.id
  )
  res.json(deletedRollercoaster)
})

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
