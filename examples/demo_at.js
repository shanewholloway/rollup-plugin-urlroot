// regexp /^@\w+\// is a convention for remappable absolute paths

// 'cdn_site' is at-mapped to '/cdn/npm' in rollup.config.js
import '@/cdn_site/jquery@3.2.1/dist/jquery.min.js'

// 'cdn_npm' is at-mapped to 'https://cdn.jsdelivr.net/npm' in rollup.config.js
import '@/cdn_npm/jquery@3.2.1/dist/jquery.min.js'

// unset at-mappings work like absolute paths by default
import '@/other/js/example_at.js'
