// app/Controllers/Http/DogsController
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

// Create dog model
const Dog = mongoose.model('Dog', new Schema({
  name: String,
}))

export default class DogsController {
  public async index ({ }: HttpContextContract) {
    // Create a dog with random name
    const dog = new Dog({
      name: Math.random().toString(36).substring(7),
    })
    // Save dog to DB
    await dog.save()

    // Return list of all saved dogs
    const dogs = await Dog.find()

    // No need to close to connection, we'll keep it alive forever
    // await mongoose.connection.close()

    // Return all the dogs (including the new one)
    return dogs
  }
}