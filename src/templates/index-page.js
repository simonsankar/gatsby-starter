import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import { ServiceCard } from "../components/ServiceCard";

export const IndexPageTemplate = ({ hero, about, services }) => (
  <>
    {/* Hero */}
    <section
      className="section section--gradient"
      style={{
        backgroundImage: `url(${
          !!hero.image.childImageSharp
            ? hero.image.childImageSharp.fluid.src
            : hero.image
        })`,
        backgroundPosition: `100%`,
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
        height: `calc(500px - 68.5px)`,
      }}
    >
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="columns">
              <div className="column is-8">
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  {hero.title}
                </h1>
                <p className="">{hero.subtext}</p>
              </div>
              <div className="column is-4">
                <div className="home-subtitle">
                  <span className="is-size-5">{hero.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About */}
    <section className="section has-background-grey-lighter">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="columns is-vcentered">
              <div className="column is-4 is-hidden-mobile">
                <div className="image__container">
                  <img
                    className="image__semi-circle"
                    src={
                      !!about.image.childImageSharp
                        ? about.image.childImageSharp.fluid.src
                        : about.image
                    }
                    alt="about"
                  />
                </div>
              </div>
              <div className="column is-4">
                <h3 className="has-text-weight-semibold is-size-2">
                  {about.title}
                </h3>
                <p>{about.description}</p>
                <a href="/about" class="btn mt-3">
                  <span>Read More</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ marginLeft: 15 }}
                  />
                </a>
              </div>
              <div className="column is-4">
                <div className="block">
                  <blockquote>
                    <p>{about.quote}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Services */}
    <section>
      <div className="columns">
        <div className="column is-half has-background-primary">
          <div className="section">
            <h3 className="has-text-weight-semibold is-size-2 has-text-white">
              {services.title}
            </h3>
            <p className="has-text-white ">{services.description}</p>
            <div className="columns is-mobile mt-3">
              {services.blurbs.map((blurb) => (
                <ServiceCard blurb={blurb} />
              ))}
            </div>
            <p className="has-text-white ">{services.description}</p>
            <a className="button is-dark is-large mt-3">Learn more</a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${
              !!services.image.childImageSharp
                ? services.image.childImageSharp.fluid.src
                : services.image
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
            filter: `grayscale(95%)`,
          }}
          className="column is-half"
        >
          hi
        </div>
      </div>
    </section>

    <section className="section has-background-white">
      <div className="container">
        <div className="section">
          <div className="columns is-vcentered px-0">
            {services.blurbs.map((blurb) => (
              <ServiceCard blurb={blurb} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  about: PropTypes.object,
  services: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        about={frontmatter.about}
        services={frontmatter.services}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        about {
          title
          subtitle
          description
          quote
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                src
              }
            }
          }
        }
        hero {
          title
          subtitle
          subtext
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                src
              }
            }
          }
        }
        services {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                src
              }
            }
          }
          blurbs {
            caption
            text
          }
        }
      }
    }
  }
`;

export default IndexPage;
