
export default function rpi_urlroot(opt={})  {
  const _fmt_ns = (path, kw) =>
    kw.val ? `${kw.val}${path}`
      : kw.id // otherwise simply pass through absolute path as-is

  const _fmt_at = (path, kw) =>
    kw.val ? `${kw.val}/${path}`
      : `/${kw.key}/${path}`

  return {
    name: 'rollup-plugin-urlroot',
    resolveId: id => {
      let id_root = null
          // resolve paths like "namespace:another/path" or "@namespace:another/path" or "node:path" or "http://cdn.example.com"
        || _resolve_root(id, opt.ns || opt, /^@?(\w*):(.*)$/, _fmt_ns)
          // resolve paths like "@/cdn/sub/path"
        || _resolve_root(id, opt.at || opt, /^@\/([^/]+)\/(.*)$/, _fmt_at)

      return id_root && {external: 'absolute', id: id_root}
    }
}}


function _resolve_root(id, map, regexp, fmt) {
  let match = regexp.exec(id)
  if (!match) return;

  let key = match[1]
  let path = match[2]
  let val = map[ match[1] ]
  if ('function' === typeof val)
    fmt = val

  return fmt(path, {id, key, val, path})
}

