import { isClient } from "./utils";
export const defaultWindow = isClient ? window : void 0;
export const defaultDocument = isClient ? window.document : void 0;
export const defaultNavigator = isClient ? window.navigator : void 0;
export const defaultLocation = isClient ? window.location : void 0;
