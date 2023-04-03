import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// Import our cool dog model
import Dog from 'App/Models/Dog'

export default class DogsController {
  public async index ({ }: HttpContextContract) {
    // Create a dog with random name
    const dog = new Dog({
      name: Math.random().toString(36).substring(7),
    })

    // Save dog to DB
    await dog.save()

    // Return list of saved dogs
    return Dog.find()
  }
}
