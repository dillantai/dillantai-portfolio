import React from "react";
import { Link } from "gatsby";

const projectPreview = ({ project }) => (
  <Link to={`/project/${project.path}`} className="post-link">
    <article className="card project-card">
      <header>
        <h3 className="post-title">{project.title}</h3>
        <div className="post-meta">{"Project date: " + project.date}</div>
        <p>{project.excerpt}</p>
      </header>
      {!!project.thumbnail && (
        <div
          className="card-image"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      )}
    </article>
  </Link>
);

export default projectPreview;
