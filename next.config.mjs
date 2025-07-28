import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'

const isGithubPages = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  output: 'export',
  basePath: isGithubPages ? '/varaka-docs' : '',
  assetPrefix: isGithubPages ? '/varaka-docs/' : '',
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
