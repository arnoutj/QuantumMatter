import React from 'react';
import ExternalLink from '../../assets/svg/external-link.svg';

import './publication.scss';

const Publication = ({ data }) => {
  return (
    <div className="publication">
      {data.author && <span className="publication_author">{data.author}</span>}
      {data.title && (
        <span>
          <strong className="publication_title">{data.title}</strong>
          {data.url && <a className="publication_link" href={data.url} alt={data.title}><ExternalLink /></a>}
        </span>
      )}
      {data.journal && <span>{data.journal}</span>}
      <hr />
    </div>
  );
};

export default Publication;
