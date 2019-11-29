import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';

import "./footer.scss";

const Footer = () => (
    <div className="footer">
        © 2019 Arnout Jansen &amp; Roos Beeldt. All right reserved.
    </div>
);

export default Footer;
