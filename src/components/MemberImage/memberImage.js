import React from 'react';
import Img from "gatsby-image";

import "./memberImage.scss";

const MemberImage = ({ image }) => (
    <div className="member-image">
        {image && <Img placeholderStyle={{ backgroundColor: `var(--color-gray)` }} fixed={image.fixed} height="150" />}
    </div>
);

export default MemberImage;
