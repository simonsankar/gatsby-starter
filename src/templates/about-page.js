import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";

export const AboutPageTemplate = ({ hero, intro, main }) => {
  return (
    <>
      <Header header={hero} />
      <section className="section has-background-white padding-y-0">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <h2 className="has-text-centered has-text-weight-bold is-size-2 heading__divider">
                  Who we are
                </h2>
              </div>
            </div>
            <div className="columns ">
              <div className="column is-8">
                <img
                  className="image is-fullwidth"
                  src={
                    !!intro.image.childImageSharp
                      ? intro.image.childImageSharp.fluid.src
                      : intro.image
                  }
                  alt="intro"
                />
              </div>
              <div className="column is-4 has-background-white-bis">
                <div className="column">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {intro.title}
                  </h3>
                  <p>{intro.description}</p>
                </div>
                <div className="column">
                  <p>{intro.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-white">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <h2 className="has-text-centered has-text-weight-bold is-size-2 heading__divider">
                  Meet the team
                </h2>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                <div class="card">
                  <div class="card-image">
                    <div class="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <div class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder image"
                          />
                        </div>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  hero: PropTypes.object,
  intro: PropTypes.object,
  main: PropTypes.object,
};

const AboutPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        hero={frontmatter.hero}
        intro={frontmatter.intro}
        // main={frontmatter.main}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        hero {
          title
          subtitle
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        intro {
          title
          description
          additional
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;
