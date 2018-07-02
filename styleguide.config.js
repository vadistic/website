const path = require('path')

module.exports = {
  title: 'Vadistic',
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    // skip aria props and those without jsdoc comment (essentialy filter react dom props)
    propFilter: props =>
      !props.name.includes('aria') && props.description !== '',
  }).parse,
  webpackConfig: require('styleguide/webpack.config.js'),
  previewDelay: 500,
  showCode: true,
  showUsage: false,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper'),
  },
}
