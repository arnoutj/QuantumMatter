import React from 'react';
import { Link } from 'gatsby';
import { Col, Row } from 'react-flexbox-grid';
import BackgroundImage from 'gatsby-background-image';

import "./highlightSection.scss";

const HighlightSection = ({ highlights }) => {
    return (
        <div className="highlight-section">
            <Row>
                <Col xs={12} md={10} mdOffset={1}>
                    <Row center="xs">
                        {highlights.map((highlight, key) => (
                            <Col xs={12} md={4}>
                                <Link className="highlight" key={key} to={`/${highlight.lab ? highlight.lab.slug : ``}/highlights/${highlight.slug}`}>
                                    <div className="highlight_image-container">
                                        {highlight.image &&
                                        <BackgroundImage
                                            className="highlight_image"
                                            fluid={highlight.image.fluid}
                                        >
                                        </BackgroundImage>}
                                    </div>
                                    <h4>{highlight.title}</h4>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default HighlightSection;
