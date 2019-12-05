import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './card.scss';

const Card = ({ data, location }) => {
  const url = location ? `${location.pathname}/${data.slug}` : null;
  return (
    <div className="card">
      {data.image && (
        <Img
          placeholderStyle={{ backgroundColor: `var(--color-gray)` }}
          fluid={data.image.fluid}
        />
      )}
      {url ? (
        <Link to={url}>
          <h2>{data.title}</h2>
        </Link>
      ) : (
        <h2>{data.title}</h2>
      )}
      {data.intro && (
        <p
          className="card_text"
          dangerouslySetInnerHTML={{
            __html: data.intro
          }}
        />
      )}
      {url && (
        <div className="card_button-wrapper">
          <Link className="btn" to={url}>
            Read more
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
