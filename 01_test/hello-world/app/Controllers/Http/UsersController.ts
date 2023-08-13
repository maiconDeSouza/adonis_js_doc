import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return `AdonisJS o melhor!!!!`
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {
    return {
      message: `Shoulder!`,
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
