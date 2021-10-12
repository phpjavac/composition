export interface VModelOptions extends Record<deploy, MayBeBoolean> {
  eventName?: string
}

export type deploy = 'passive' | 'deep'
type MayBeBoolean = Boolean | undefined

