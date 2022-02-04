import { ComponentType } from "react"
import { ComponentProps, RenderComponentResolver } from "@uniformdev/canvas-react"
import { NotionBlock } from "./NotionBlock"

const componentMap = new Map<string, ComponentType<ComponentProps>>([
  ['notion',  NotionBlock],
])

export const resolveRenderer: RenderComponentResolver =
  ({ type }) => componentMap.get(type) || null
