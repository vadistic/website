/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyBabelrc = ({ babelrc }) => {
  babelrc.plugins.push('babel-plugin-tailwind')
  return babelrc
}

