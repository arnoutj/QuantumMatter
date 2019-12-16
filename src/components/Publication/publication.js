import React, { Fragment } from 'react';
import ExternalLink from '../../assets/svg/external-link.svg';
import Img from "gatsby-image";

import './publication.scss';

const Publication = ({ data }) => {
  return (
    <Fragment>
      <div className="publication">
        {data.thumbnail && (
          <Img className="publication_thumbnail" fixed={data.thumbnail.fixed} />
        )}
        <div className="publication_text">
          {data.author && <span className="publication_author">{data.author}</span>}
          {data.title && (
            <span>
              <strong className="publication_title">{data.title}</strong>
              {data.url && <a className="publication_link" href={data.url} alt={data.title}><ExternalLink /></a>}
            </span>
          )}
          {data.journal && <span>{data.journal}</span>}
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Publication;
