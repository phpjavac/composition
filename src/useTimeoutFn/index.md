---
category: Animation
---

# useTimeoutFn

Wrapper for `setTimeout` with controls.

```js
import { useTimeoutFn } from 'zcomposition'

const { isPending, start, stop } = useTimeoutFn(() => {
  /* ... */
}, 3000)
```
