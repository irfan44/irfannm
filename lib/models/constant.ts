import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type ConstantsModel = ConstantModel[]

export interface ConstantModel {
  name: string
  slug: string
  stringValue: string
  markdownValue: MDXRemoteSerializeResult
  updatedAt: string
}
