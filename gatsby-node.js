const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    {
      allMdx(
        sort: { fields: frontmatter___date }
        filter: { fileAbsolutePath: { glob: "**/posts/**" } }
      ) {
        edges {
          node {
            id
            tableOfContents
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (errors) {
    console.log(result.errors)
  }

  if (data) {
    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
        component: path.resolve('./src/templates/post.tsx'),
        context: {
          absPath: node.parent.absolutePath,
          tableOfContents: node.tableOfContents,
          id: node.id,
        },
      })
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: `/${parent.sourceInstanceName}/${parent.name}`,
    })
  }
}
