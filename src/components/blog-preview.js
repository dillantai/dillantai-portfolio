import React from "react";
import { Link } from "gatsby";

const blogPreview = ({ blog }) => (
  <article className="card">
    <Link to={blog.path}>
      {!!blog.thumbnail && (
        <img src={blog.thumbnail} alt={blog.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={blog.path} className="post-link">
          {blog.title}
        </Link>
      </h2>
      <div className="post-meta">{blog.date}</div>
    </header>
  </article>
);

export default blogPreview;
