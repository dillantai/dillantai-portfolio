import React from "react";
import { Link } from "gatsby";

const projectPreview = ({ project }) => (
  <article className="card">
    <Link to={`/project/${project.path}`}>
      {!!project.thumbnail && (
        <img src={project.thumbnail} alt={project.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={`/project/${project.path}`} className="post-link">
          {project.title}
        </Link>
      </h2>
      <div className="post-meta">{"Project date: " + project.date}</div>
      <p>{project.excerpt}</p>
    </header>
  </article>
);

export default projectPreview;
