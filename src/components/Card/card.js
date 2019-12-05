import React from 'react';
import Img from 'gatsby-image';
import Button from '../Button/button';

import './card.scss';

const Card = ({ data }) => (
  <div className="card">
    {data.image && (
      <Img
        placeholderStyle={{ backgroundColor: `var(--color-gray)` }}
        fluid={data.image.fluid}
      />
    )}
    <h2>{data.title}</h2>
    {data.intro && (
      <p className="card_text"
        dangerouslySetInnerHTML={{
          __html: data.intro
        }}
      />
    )}
    <a
      className="btn card_button"
      href={`${data.lab ? `/${data.lab.slug}` : ``}/news/${data.slug}`}
    >Read more</a>
  </div>
);

export default Card;
