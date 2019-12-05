import React from 'react';
import Img from 'gatsby-image';

import './card.scss';

const Card = ({ data, hideLink }) => {
  const url = `${data.lab ? `/${data.lab.slug}` : ``}/news/${data.slug}`;
  return (
    <div className="card">
      {data.image && (
        <Img
          placeholderStyle={{ backgroundColor: `var(--color-gray)` }}
          fluid={data.image.fluid}
        />
      )}
      <a href={url}>
        <h2>{data.title}</h2>
      </a>
      {data.intro && (
        <p
          className="card_text"
          dangerouslySetInnerHTML={{
            __html: data.intro
          }}
        />
      )}
      {!hideLink && (
        <div className="card_button-wrapper">
          <a className="btn" href={url}>
            Read more
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
