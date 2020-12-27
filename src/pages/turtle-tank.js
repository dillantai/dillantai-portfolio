import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import styles from "./turtle-tank.module.scss";

export default () => (
  <Layout>
    <Helmet>
      <title>Dillan Tai Portfolio - CSS Art Turtle Tank</title>
      <meta
        name="description"
        content="Dillan Tai Portfolio - CSS Art Turtle Tank"
      />
    </Helmet>
    <div className="blog-post-container">
      <article className="post">
        {/* <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}> */}
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/css-art-red-eared-slider.jpg')`
          }}
        >
          <h1 className="post-title">CSS Art: Turtle and Tank</h1>
          <div className="post-meta">October 2020</div>
        </div>
        <section className={`blog-post-content ${styles.contentcontainer}`}>
          <div className={styles.container}>
            <div className={styles.tank}>
              <div className={styles.tank__water}></div>
              <div className={styles.tank__wateropaque}></div>
              <div className={styles.tank__dock}>
                <div className={styles.tank__dockplatform}></div>
                <div className={styles.tank__dockramp}></div>
              </div>
              <div className={styles.tank__sand}></div>
              <div 
              className={`${styles.tank__grass} ${styles.tank__grassforeground}`}
              >
                <div className={styles.tank__grassleft}></div>
                <div
                  className={`${styles.tank__grassleft} ${styles.tank__grassright}`}
                ></div>
              </div>
              <div className={styles.turtle}>
                <div className={styles.turtle__shell}></div>
                <div className={styles.turtle__head}>
                  <div className={styles.turtle__eye}></div>
                  <div className={styles.turtle__redear}></div>
                </div>
                <div

                //   className={`{styles.turtle__limb} {styles.turtle__limbtail}`}
                ></div>
                <div
                  className={`${styles.turtle__limb} ${styles.turtle__limbarm} ${styles.turtle__limbarmleft}`}
                ></div>
                <div
                  className={`${styles.turtle__limb} ${styles.turtle__limbarm} ${styles.turtle__limbarmright}`}
                ></div>
                <div
                  className={`${styles.turtle__limb} ${styles.turtle__limbleg} ${styles.turtle__limblegleft}`}
                ></div>
                <div
                  className={`${styles.turtle__limb} ${styles.turtle__limbleg} ${styles.turtle__limblegright}`}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </Layout>
);
