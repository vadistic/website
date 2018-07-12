const getProps = require('@svgr/core/lib/templates/util').getProps

module.exports = (code, config, state) => {
  const props = getProps(config)

  let result = `import * as React from 'react'\n\n`

  result += `export interface ${state.componentName}Props {
    title?: string
  }\n\n`

  result += `const ${state.componentName}:React.SFC<${
    state.componentName
  }Props> = ${props} => ${code}\n\n`

  if (state.webpack && state.webpack.previousExport) {
    result += `export default ${state.webpack.previousExport}\n`
    result += `export { ${state.componentName} as ReactComponent }`
  } else if (state.rollup && state.rollup.previousExport) {
    result += `${state.rollup.previousExport}\n`
    result += `export { ${state.componentName} as ReactComponent }`
  } else {
    result += `export default ${state.componentName}`
  }

  return result
}
