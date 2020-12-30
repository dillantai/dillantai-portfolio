import { graphql, useStaticQuery } from "gatsby";

const useBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
  return data.allMarkdownRemark.nodes.map(post => ({
    date: post.frontmatter.date,
    path: post.frontmatter.path,
    title: post.frontmatter.title,
    thumbnail: post.frontmatter.thumbnail,
    html: post.html,
    id: post.id
  }));
};

export default useBlogs;
