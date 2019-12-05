import React from 'react';
import MemberImage from '../MemberImage/memberImage';

import './member.scss';

const Member = ({ data }) => {
  return (
    <div className="member">
      <MemberImage image={data.image} />
      <h3 className="member_title">{data.name}</h3>
      <span className="member_subtitle">{data.role.title}</span>
      <div className="member_text">
        {data.contact && (
          <p
          dangerouslySetInnerHTML={{
            __html: data.contact
          }}
        />
        )}
        {data.description && (
          <p
            dangerouslySetInnerHTML={{
              __html: data.description
            }}
          />
        )}
        {data.urlUva && <a href={data.urlUva} alt={`Personal UvA page of ${data.name}`}>UvA page</a>}
        {data.urlPersonal && <a href={data.urlPersonal} alt={`Website of ${data.name}`}>Website</a>}
      </div>
    </div>
  );
};

export default Member;
