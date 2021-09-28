import { Ref } from 'vue'

/**
 * Maybe it's a ref, or not.
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * Any function
 */
export type Fn = () => void

export interface Pausable {
    /**
     * A ref indicate whether a pusable instance is active
     */
    isActive: Ref<boolean>
  
    /**
     * Temporary pause the effect from executing
     */
    pause: Fn
  
    /**
     * Resume the effects
     */
    resume: Fn
}

export interface Stopable {
    /**
     * A ref indicate whether a stopable instance is executing
     */
    isPending: Ref<boolean>
  
    /**
     * Stop the effect from executing
     */
    stop: Fn
  
    /**
     * Start the effects
     */
    start: Fn
  }
  type PermissionName = "gamepad" | "geolocation" | "notifications" | "persistent-storage" | "push" | "screen-wake-lock";
  export interface PermissionDescriptor {
    name: PermissionName;
  }