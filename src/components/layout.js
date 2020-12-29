import React from "react";
import { Link } from "gatsby"
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} dillan tai. built with{" "}
          <a href="https://www.gatsbyjs.com/">gatsby</a> and deployed with{" "}
          <a href="https://www.netlify.com/">netlify</a>.
        </p>
      </footer>
    </div>
  );
};

export default Layout;