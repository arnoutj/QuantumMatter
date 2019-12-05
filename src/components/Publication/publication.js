import React from 'react';

import './publication.scss';

const Publication = ({ data }) => {
  return (
    <div className="publication">
      {data.author && <span>{data.author}</span>}
      {data.title && <span><strong>{data.title}</strong></span>}
      {data.journal && <span>{data.journal}</span>}
      {data.url && <a href={data.url} alt={data.title}>Link</a>}
      <hr />
    </div>
  );
};

export default Publication;
