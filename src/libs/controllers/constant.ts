import { ConstantService } from '@libs/api/services/constant'
import type { ConstantModel, ConstantsModel } from '@libs/models/constant'

export class ConstantController {
  static async getConstants(): Promise<ConstantsModel | undefined> {
    const response = await ConstantService.getConstants()
    if (!response) return undefined

    return response.constants
  }

  static async getConstant(slug: string): Promise<ConstantModel | undefined> {
    const response = await ConstantService.getConstant(slug)
    if (!response) return undefined

    const constant = response.constants[0]
    return constant
  }
}
