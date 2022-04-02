// unset ns-mappings pass through with no changes
import 'node:path'
import 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js';

// unset ns-at-mappings also pass through with no changes -- producing '@' prefix in output
import '@absent:example_ns_at.js'

// unset at-mappings work like absolute paths by default
import '@/other/js/example_at.js'

