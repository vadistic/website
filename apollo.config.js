require('./scripts/env-config').configure()

module.exports = {
  client: {
    name: 'vadistic-website',
    service: 'vadistic-website',
    tagName: 'graphql',
    includes: ['src/**/*.{ts,tsx}', './.cache/fragments/*'],
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
}
