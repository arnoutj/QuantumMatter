import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import './card.scss';

const Card = ({ data, location, showThumbnail }) => {
  const url = location
    ? `${data.lab ? `/${data.lab.slug}/` : ``}${location.pathname.split('/').pop()}/${data.slug}`
    : null;

  return (
    <div className="card">
      {data.image && (
        showThumbnail ? 
            <div className="card_image-container">
              <BackgroundImage className="card_image" fluid={data.image.fluid} />
            </div>
            :
              <Img
                placeholderStyle={{ backgroundColor: `var(--color-gray)` }}
                fluid={data.image.fluid} />
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
