import Mongoose, { Schema } from '@ioc:Mongoose'

export default Mongoose.model('Dog',
  new Schema({
    name: String,
  })
)
