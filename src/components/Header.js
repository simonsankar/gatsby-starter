import { head } from "lodash";
import React from "react";

export default ({ header }) => {
  return (
    <>
      <section className="section has-background-grey-lighter padding-y-0">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="columns">
                <div className="column">
                  <h1 className="has-text-color-primary has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                    {header.title}
                  </h1>
                  <p className="">{header.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="full-width-image margin-top-0 is-hidden-mobile"
        style={{
          backgroundImage: `url(${
            !!header.image.childImageSharp
              ? header.image.childImageSharp.fluid.src
              : header.image
          })`,
          backgroundSize: "cover",
          backgroundPosition: `center center`,
          backgroundRepeat: "none",
          filter: "grayscale(.5)",
          height: "400px",
        }}
      ></div>
    </>
  );
};
