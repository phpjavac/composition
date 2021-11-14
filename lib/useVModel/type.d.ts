export declare type deploy = 'passive' | 'deep';
declare type MayBeBoolean = boolean | undefined;
export interface VModelOptions extends Record<deploy, MayBeBoolean> {
    eventName?: string;
}
export {};
