import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0
          }}
        >
          <h1 className="post-title">Get in Touch</h1>
        </div>
        <div>
          {/* <form
            name="contact"
            method="post"
            action="/contact-success" //
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="form-container" //
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form> */}

          <form
            name="contactForm"
            method="POST"
            action="/contact-success"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            id="contact-form"
            className="form-container"
          >
            <p className="screen-reader-text">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <p className="form-row">
              <label htmlFor="contact-form-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="contact-form-name"
                className="form-input"
              />
            </p>
            <p className="form-row">
              <label htmlFor="contant-form-email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="contant-form-email"
                className="form-input"
              />
            </p>
            <p className="form-row">
              <label htmlFor="contant-form-message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="contant-form-message"
                className="form-textarea"
                rows="7"
              />
            </p>
            <input type="hidden" name="form-name" value="contactForm" />
            <p className="form-row form-submit">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <input
                  type="submit"
                  className="button -primary"
                  style={{ marginRight: 0 }}
                />
              </div>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
