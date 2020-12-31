const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectPostTemplate = path.resolve(`src/templates/projectTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              posttype
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Failed to create blogs`, result.errors)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.posttype === 'project') {
      createPage({
        path: `/project${node.frontmatter.path}`,
        component: projectPostTemplate,
        context: {
          slug: node.frontmatter.path,
          posttype: node.frontmatter.posttype,
        }, // additional data can be passed via context
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.path,
          posttype: node.frontmatter.posttype,
        }, // additional data can be passed via context
      })
    }
  })
}