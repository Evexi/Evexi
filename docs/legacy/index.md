# Legacy Script

The legacy script will work on older platforms out the box such as SSSP2 and SSSP4. For SSSP6+ the modern script should be used.

Note: `The Evexi namespace is bound directly to the window object within the legacy script.`

#

The Legacy script should be used like so:
```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
<script type="text/javascript" src="./evexi.legacy.iife.min.js"></script>
<script>
    console.log(window.Evexi)
</script>
```

#

For the latest/modern script you can import like normal:
````typescript
import Evexi from 'evexi'
````