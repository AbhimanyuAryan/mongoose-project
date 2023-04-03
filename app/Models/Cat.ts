import Mongoose, { Schema } from '@ioc:Mongoose'

export default Mongoose.model('Cat',
  new Schema({
    name: String,
  })
)
