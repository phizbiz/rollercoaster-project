const { Schema } = require('mongoose')

const Rollercoaster = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    region: { type: Schema.Types.ObjectId, ref: 'Region' }
  },
  { timestamps: true }
)

module.exports = Rollercoaster
