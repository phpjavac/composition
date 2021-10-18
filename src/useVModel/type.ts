export type deploy = 'passive' | 'deep'

type MayBeBoolean = boolean | undefined
export interface VModelOptions extends Record<deploy, MayBeBoolean> {
  eventName?: string
}


