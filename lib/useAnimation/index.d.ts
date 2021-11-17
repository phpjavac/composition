import gsap from 'gsap';
import { BasicTarget } from '../utils/dom';
interface Options {
    xMove?: number | (() => number);
    yMove?: number | (() => number);
    repeat?: number;
    duration?: number;
    delay?: number;
    rotation?: number;
    scale?: number;
    borderRadius?: string;
    onComplete?: (() => void);
    alpha?: number;
    paused?: boolean;
    backgroundColor?: string;
    yoyo?: boolean;
    startAt?: Object;
}
export default function useAnimation(target: BasicTarget, parameter?: Options): gsap.core.Tween;
export {};
