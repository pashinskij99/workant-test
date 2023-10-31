import { ReactNode } from 'react'

interface IRow {
  id: number
  name?: string
  field: string
  render?: () => ReactNode
}
export interface IRows {
  head: IRow[]
}
