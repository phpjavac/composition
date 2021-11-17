import gsap from 'gsap';
import { BasicTarget, getTargetElement } from '../utils/dom'

interface Options {
    xMove?: number | (() => number)
    yMove?: number | (() => number)
    repeat?:number 
    duration?:number
    delay?:number
    rotation?:number
    scale?:number
    borderRadius?:string
    onComplete?:(() => void)
    alpha?:number
    paused?:boolean
    backgroundColor?:string
    yoyo?:boolean
    startAt?:Object
}
export default function useAnimation(target:BasicTarget,parameter?:Options): gsap.core.Tween {
  const targetElement = getTargetElement(target)
  const tween = gsap.to(targetElement,{
    x:parameter.xMove,
    y:parameter.yMove,
    repeat:parameter.repeat,
    duration: parameter.duration || 1,
    delay:parameter.delay,
    rotation:parameter.rotation,
    scale:parameter.scale,
    borderRadius:parameter.borderRadius,
    onComplete:parameter.onComplete,
    alpha:parameter.alpha,
    paused:parameter.paused ||false,
    backgroundColor:parameter.backgroundColor,
    yoyo:parameter.yoyo || false,
    startAt:parameter.startAt,
  }); 
  return tween
}