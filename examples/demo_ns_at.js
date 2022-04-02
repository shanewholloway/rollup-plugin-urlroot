// 'site' is ns-mapped to '/' in rollup.config.js
import '@site:example_ns_at.js'

// 'asset' is ns-mapped to '/app/assets/' in rollup.config.js
import '@asset:example_ns_at.js'

// unset ns-at-mappings also pass through with no changes -- producing '@' prefix in output
import '@absent:example_ns_at.js'

