# rollup-plugin-urlroot

RollupJS plugin for absolute import resolving for absolute URL imports on the same host domain.

## Use

```javascript
# in rollup.config.js
import rpi_urlroot from 'rollup-plugin-urlroot'

const plugins = [
  rpi_urlroot({
    ns: {
      site: '/',
      asset: '/app/assets/',
    },

    at: {
      cdn_npm: 'https://cdn.jsdelivr.net/npm',
      cdn_site: '/cdn',
    },
  })]

export default {
  input: [
    'demo_ns.js',
    'demo_ns_at.js',
    'demo_at.js',
    'demo_unset.js',
    'demo_dbg.js',
  ],
  output: { dir: './out', format: 'es' },
  plugins,
}
```

## License

[MIT](LICENSE)
