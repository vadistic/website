import React from 'react'

// for use with `gatsby-mdx` defaultLayouts option
// https://github.com/ChristopherBiscardi/gatsby-mdx/tree/master/packages/gatsby-mdx#default-layouts
export const MdxTemplate: React.FC = props => {
  return <div className="mdx">{props.children}</div>
}

export default MdxTemplate
