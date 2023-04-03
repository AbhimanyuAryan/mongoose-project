// app/Controllers/Http/CatsController
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// Import Mongoose
import mongoose, { Schema } from 'mongoose'

// Initialize connection to database
// Notice how it doesn't have 'await'
// We won't need it, coz Mongoose "queues" any database queries
// until connection is made. It's nice to have, but might with 
// our current implementation it might start to cause some troubles in prod,
// especially when DB is on other server
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// Create cat model
const Cat = mongoose.model('Cat', new Schema({
  name: String,
}))

export default class CatsController {
  public async index ({ }: HttpContextContract) {
    // Create a cat with random name
    const cat = new Cat({
      name: Math.random().toString(36).substring(7),
    })
    // Save cat to DB
    await cat.save()

    // Return list of all saved cats
    const cats = await Cat.find()

    // No need to close to connection, we'll keep it alive forever
    // await mongoose.connection.close()

    // Return all the cats (including the new one)
    return cats
  }
}