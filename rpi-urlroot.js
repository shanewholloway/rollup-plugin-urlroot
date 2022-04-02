export default function (mapping={})  {
  return {
    name: 'rollup-plugin-urlroot',
    resolveId: id => {
      let m = /^@\/([^/]+)\/(.*)$/.exec(id)
      if (!m) return null

      let id_root = `/${mapping[m[1]] || m[1]}/${m[2]}`
      return {external: 'absolute', id: id_root}
    }
}}

