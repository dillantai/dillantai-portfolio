import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import BlogPreview from "../components/blog-preview";
import ProjectPreview from "../components/project-preview";
import HeroHeader from "../components/heroHeader";
import useSiteMetadata from "../hooks/use-sitemetadata";
import useBlogs from "../hooks/use-blogs";
import useProjects from "../hooks/use-projects";

const IndexPage = () => {

  const { title, description } = useSiteMetadata();
  const blogs = useBlogs();
  const projects = useProjects();

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <HeroHeader />
      <h2 className="section-heading">Select Projects &darr;</h2>
      <div className="grids">
        {projects.map(project => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </div>
      <h2 className="section-heading">Blog Posts &darr;</h2>
      <div className="grids">
        {blogs.map(blog => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;