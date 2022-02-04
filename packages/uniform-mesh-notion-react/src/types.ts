import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints'

export const CANVAS_NOTION_PARAMETER_TYPES = ['notion-page']

export interface CanvasNotionPageParameterRawValue {
  blockId?: string
}

export type CanvasNotionPageParameterOutputValue =
  ListBlockChildrenResponse & {
    blockId: string
  }
