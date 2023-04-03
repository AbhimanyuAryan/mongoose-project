import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// Import our cool cat model
import Cat from 'App/Models/Cat'

export default class CatsController {
  public async index ({ }: HttpContextContract) {
    // Create a cat with random name
    const cat = new Cat({
      name: Math.random().toString(36).substring(7),
    })

    // Save cat to DB
    await cat.save()

    // Return list of saved cats
    return Cat.find()
  }
}
