import React from "react";
import { Link } from "gatsby";

const blogPreview = ({ blog }) => (
  <Link to={blog.path} className="post-link">
    <article className="card">
      {!!blog.thumbnail && (
        <img src={blog.thumbnail} alt={blog.title + "- Featured Shot"} />
      )}
      <header>
        <h3 className="post-title">{blog.title}</h3>
        <div className="post-meta">{blog.date}</div>
      </header>
    </article>
  </Link>
);

export default blogPreview;
