import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default props => (
  <nav className="navigation">
    <Link to="/contact" activeClassName="current-page">
      contact
    </Link>
    <Link to="#select-projects">projects</Link>
    <Link to="#blog-posts">blog</Link>
    <ThemeChanger />
  </nav>
);
