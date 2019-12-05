import React from 'react';
import Img from "gatsby-image";

import "./memberImage.scss";

const MemberImage = ({ image }) => (
    <div className="member-image">
        <div className="member-image_inner" style={image ? {height: image.fixed.width} : null}>
            {image && <Img placeholderStyle={{ backgroundColor: `var(--color-gray)` }} fixed={image.fixed} />}
        </div>
    </div>
);

export default MemberImage;
