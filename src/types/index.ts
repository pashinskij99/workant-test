import {ReactNode} from "react";

interface IRow {
  id: number
  name?: string
  render?: () => ReactNode
}
export interface IRows {
  head: IRow[]
}