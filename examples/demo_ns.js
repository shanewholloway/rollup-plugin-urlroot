// 'site' is ns-mapped to '/' in rollup.config.js
import 'site:example_ns.js'

// 'asset' is ns-mapped to '/app/assets/' in rollup.config.js
import 'asset:example_ns.js'

// unset ns-mappings pass through with no changes
import 'node:path'
import 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'

