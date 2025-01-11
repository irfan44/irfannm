export type ConstantsModel = ConstantModel[]

export interface ConstantModel {
  name: string
  slug: string
  stringValue: string
  markdownValue: any // change with MDX type
  updatedAt: string
}
