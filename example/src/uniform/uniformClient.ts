import { CanvasClient } from '@uniformdev/canvas'

export const uniformClient = new CanvasClient({
  apiKey: process.env.UNIFORM_API_KEY,
  projectId: process.env.UNIFORM_PROJECT_ID,
  apiHost: process.env.UNIFORM_API_HOST
})
