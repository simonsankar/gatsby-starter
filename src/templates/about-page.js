import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";

export const AboutPageTemplate = ({ hero, intro, main }) => {
  return (
    <>
      <Header header={hero} />
      <section className="section has-background-white">Content</section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  hero: PropTypes.object,
  intro: PropTypes.object,
  main: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        hero={frontmatter.hero}
        // intro={frontmatter.intro}
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
      }
    }
  }
`;
