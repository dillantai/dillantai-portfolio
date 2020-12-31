import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { posttype: { eq: "project" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.nodes.map(project => ({
    date: project.frontmatter.date,
    path: project.frontmatter.path,
    title: project.frontmatter.title,
    thumbnail: project.frontmatter.thumbnail,
    html: project.html,
    id: project.id,
    excerpt: project.excerpt
  }));
};

export default useProjects;
