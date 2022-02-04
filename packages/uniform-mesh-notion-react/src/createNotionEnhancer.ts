import { Client } from '@notionhq/client'
import { ComponentParameterEnhancer } from '@uniformdev/canvas'
import {
  CanvasNotionPageParameterOutputValue,
  CanvasNotionPageParameterRawValue,
} from './types'

interface CreateNotionEnhancerOptions {
  /**
   * An object where the key is the source name
   * and the value is the Notion client instance
   *
   * we will use the "default" source if none exists
   * on the component parameter value
   */
  clients: Record<string, Client>
}

export function createNotionEnhancer({
  clients,
}: CreateNotionEnhancerOptions): ComponentParameterEnhancer<
  CanvasNotionPageParameterRawValue,
  CanvasNotionPageParameterOutputValue
> {
  return {
    enhanceOne: async function notionEnhancer({
      parameter,
      parameterName,
      component,
      context,
    }) {
      const client: Client = clients['default']
      if (!client) {
        throw new Error(
          'Cannot find a Notion client for this source'
        )
      }
      console.log(parameter, parameterName)
      if (parameter.value.blockId) {
        try {
          const res = await client.blocks.children.list({
            block_id: parameter.value.blockId,
          })
          // parameter.value.res = res
          console.log('res', res)
          return {
            blockId: parameter.value.blockId,
            ...res,
          }
        } catch (error) {}
      }
    },
  }
}
