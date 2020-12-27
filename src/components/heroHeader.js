import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <section className="hero__container">
        <h1 className="hero__headline">{data.site.siteMetadata.home.title}</h1>
        <div className="hero__content">
          <div
            className="hero__text"
            dangerouslySetInnerHTML={{
              __html: data.site.siteMetadata.home.description
            }}
          />
          <Link to="/contact" className="button -primary">
            Get in touch &rarr;
          </Link>
        </div>
        <div className="hero__image">
          <img src="/assets/developer-blue.svg" alt="person sitting at computer desk"/>
        </div>
      </section>
    )}
  />
);
