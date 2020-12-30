import React from "react";
import { Link } from "gatsby";

const blogPreview = ({ post }) => (
  <article className="card ">
    <Link to={post.path}>
      {!!post.thumbnail && (
        <img src={post.thumbnail} alt={post.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.path} className="post-link">
          {post.title}
        </Link>
      </h2>
      <div className="post-meta">{post.date}</div>
    </header>
  </article>
);

export default blogPreview;
