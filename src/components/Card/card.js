import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './card.scss';

const Card = ({ data, location, showThumbnail }) => {
  const url = location
    ? `${data.lab ? `/${data.lab.slug}/` : ``}${location.pathname.split('/').pop()}/${data.slug}`
    : null;

  const imageStyle = {
    marginBottom: `var(--spacing-lg)`
  };
  
  if(showThumbnail) {
      imageStyle.maxHeight = "100%";
      imageStyle.height =  "20rem";
  }

  return (
    <div className="card">
      {data.image && (
        showThumbnail ? 
            <div style={imageStyle}>
              <Img
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.image.fluid} />
            </div>
            :
            <Img
              fluid={data.image.fluid} />
        )
      }

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
