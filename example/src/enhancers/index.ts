import { EnhancerBuilder } from '@uniformdev/canvas'
import {
  CANVAS_NOTION_PARAMETER_TYPES,
  createNotionEnhancer,
} from 'uniform-mesh-notion-react'
import { notionClient } from '../uniform/notionClient'

const notionEnhancer = createNotionEnhancer({
  clients: {
    default: notionClient,
  },
})

export const enhancers = new EnhancerBuilder().parameterType(
  CANVAS_NOTION_PARAMETER_TYPES,
  notionEnhancer
)
