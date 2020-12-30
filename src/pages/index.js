import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import HeroHeader from "../components/heroHeader";
import useSiteMetadata from "../hooks/use-sitemetadata";
import useBlogs from "../hooks/use-blogs";

const IndexPage = () => {

  const { title, description } = useSiteMetadata();
  const blogs = useBlogs();

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HeroHeader />
      <h2 className="section-heading">Blog Posts &darr;</h2>
      <div className="grids">
        {blogs.map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;