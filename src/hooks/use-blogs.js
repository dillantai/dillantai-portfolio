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
  return data.allMarkdownRemark.nodes.map(blog => ({
    date: blog.frontmatter.date,
    path: blog.frontmatter.path,
    title: blog.frontmatter.title,
    thumbnail: blog.frontmatter.thumbnail,
    html: blog.html,
    id: blog.id
  }));
};

export default useBlogs;
