import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default props => (
  <nav className="navigation">
    <Link to="/contact" activeClassName="current-page">
      contact
    </Link>
    <a href="/#select-projects">projects</a>
    <a href="/#blog-posts">blog</a>
    <ThemeChanger />
  </nav>
);
