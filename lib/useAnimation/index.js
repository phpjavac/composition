import { getTargetElement } from "../utils/dom";
import gsap from "gsap";
export default function useAnimation(target, parameter) {
  const targetElement = getTargetElement(target);
  let tween = gsap.to(targetElement, {
    x: parameter.xMove,
    y: parameter.yMove,
    repeat: parameter.repeat,
    duration: parameter.duration || 1,
    delay: parameter.delay,
    rotation: parameter.rotation,
    scale: parameter.scale,
    borderRadius: parameter.borderRadius,
    onComplete: parameter.onComplete,
    alpha: parameter.alpha,
    paused: parameter.paused || false,
    backgroundColor: parameter.backgroundColor,
    yoyo: parameter.yoyo || false,
    startAt: parameter.startAt
  });
  return tween;
}
