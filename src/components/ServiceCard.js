import React from "react";

export const ServiceCard = ({ blurb }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-12">
              <h4 className="is-size-4 has-text-centered">{blurb.caption}</h4>
              <p className="has-text-centered">{blurb.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
