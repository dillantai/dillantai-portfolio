import React from "react";
import { Link } from "gatsby";

const projectPreview = ({ project }) => (
  <article className="card project-card">

    <header>
      <h2 className="post-title">
        <Link to={`/project/${project.path}`} className="post-link">
          {project.title}
        </Link>
      </h2>
      <div className="post-meta">{"Project date: " + project.date}</div>
      <p>{project.excerpt}</p>
    </header>
    <Link to={`/project/${project.path}`}>
      {!!project.thumbnail && (
        <div className="card-image" style={{backgroundImage:`url(${project.thumbnail})`}}></div>
        // <img className="card-image" src={project.thumbnail} alt={project.title + "- Featured Shot"} />
      )}
    </Link>
  </article>
);

export default projectPreview;
