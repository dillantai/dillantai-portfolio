import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div className="one-grids -contact" style={{}}>
      <div
        className="post-thumbnail"
        style={{
          backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
          marginBottom: 0
        }}
      >
        <h1 className="post-title">Thank you for your message.</h1>
        <p>I will reply to you as soon as possible.</p>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <Link to='/' className="button -secondary">Return Home</Link>
        </div>
      </div>
    </div>
  </Layout>
);
