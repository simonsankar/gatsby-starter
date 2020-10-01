import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ hero, about }) => (
  <>
    <section
      className="section section--gradient"
      // style={{
      //   backgroundImage: `url(${
      //     !!hero.image.childImageSharp ? image.childImageSharp.fluid.src : image
      //   })`,
      //   backgroundPosition: `100%`,
      //   backgroundSize: "30%",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
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
      </div>
    </section>

    <section className="section has-background-grey-lighter">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {about.title}
                    </h3>
                  </div>
                  <div className="tile">
                    <p>{about.description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
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

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  about: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate hero={frontmatter.hero} about={frontmatter.about} />
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
        }
        hero {
          title
          subtitle
          subtext
        }
      }
    }
  }
`;
// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         subtitle
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
