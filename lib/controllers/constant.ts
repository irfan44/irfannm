import { ConstantService } from 'lib/api/services/constant'
import type { ConstantModel, ConstantsModel } from 'lib/models/constant'

export class ConstantController {
  static async getConstants(): Promise<ConstantsModel> {
    const response = await ConstantService.getConstants()
    return response.constants
  }

  static async getConstant(slug: string): Promise<ConstantModel> {
    const response = await ConstantService.getConstant(slug)
    const constant = response.constants[0]
    return constant
  }
}
