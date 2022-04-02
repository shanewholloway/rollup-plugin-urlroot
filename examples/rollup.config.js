import rpi_urlroot from 'rollup-plugin-urlroot'

const plugins = [
  rpi_urlroot({
    ns: {
      site: '/',
      asset: '/app/assets/',

      ns_dbg: (path, kw) => {
        console.log('ns_dbg: %o', path, kw)
        return '#=NS~DBG=#'+path },
    },

    at: {
      cdn_npm: 'https://cdn.jsdelivr.net/npm',
      cdn_site: '/cdn/npm',

      at_dbg: (path, kw) => {
        console.log('at_dbg: %o', path, kw)
        return '#=AT~DBG=#'+path },
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

