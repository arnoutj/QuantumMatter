import React from 'react';
import Img from 'gatsby-image';
import MemberImage from '../MemberImage/memberImage';

import './member.scss';

const Member = ({ data }) => {
  return (
    <div className="member">
      <MemberImage image={data.image} />
      <h3 className="member_title">{data.name}</h3>
      {data.description && (
        <p
          className="member_text"
          dangerouslySetInnerHTML={{
            __html: data.description
          }}
        />
      )}
    </div>
  );
};

export default Member;
