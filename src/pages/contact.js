import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import useSiteMetadata from "../hooks/use-sitemetadata";

const ContactPage = () => {
  const { title, description } = useSiteMetadata();

  return (
    <Layout>
      <Helmet>
        <title>Contact — {title}</title>
        <meta
          name="description"
          content= {"Contact page of " + description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/contact-2.jpg')`,
            marginBottom: 0
          }}
        >
          <h1 className="post-title">get in touch</h1>
        </div>
        <div>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="/contact-success"
            className="form-container"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>
              name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              message
              <textarea name="message" id="message" rows="5" />
            </label>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;