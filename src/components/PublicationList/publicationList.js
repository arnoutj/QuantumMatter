import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Publication from '../Publication/publication';

import './publicationList.scss';

const PublicationList = ({ publications }) => {
  const [filter, setFilter] = useState(null);
  const filterByThesis = (filterByThesis) => setFilter(filterByThesis);
  const showFilters = !!publications.group.find(group => group.nodes.find(item => item.thesis));

  return (
    <Row>
      <Col xs={12} md={6} mdOffset={3}>
        {showFilters && (
          <div className="filters">
            <h3 className="filters-label">Filter publications</h3>
            <ul className="filters-list">
              <li>
                <button
                  className={`btn ${filter ? `` : `active`}`}
                  onClick={() => filterByThesis(null)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={`btn ${filter ? `active` : ``}`}
                  onClick={() => filterByThesis(true)}
                >
                  Theses
                </button>
              </li>
            </ul>
            <hr />
          </div>
        )}
        {publications.group
          .sort((a, b) => b.year - a.year)
          .map((group, key) => {
            const items = group.nodes.filter((item) =>
              filter ? item.thesis === filter : true
            );
            if (!items.length) {
              return null;
            }
            return (
              <div key={key}>
                <h2>{group.year}</h2>
                {items.map((item, key) => (
                  <Publication key={key} data={item} />
                ))}
              </div>
            );
          })}
      </Col>
    </Row>
  );
};

export default PublicationList;
