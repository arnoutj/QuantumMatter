import React from 'react';
import Section from '../Section/section';

import "./memberLarge.scss";
import { Col, Row } from 'react-flexbox-grid';
import MemberImage from '../MemberImage/memberImage';

const MemberLarge = ({ member }) => (
    <Section className="dark">
        <Row>
            <Col xs={6} md={6} mdOffset={1} lg={5} lgOffset={2}>
                <div className="member-large_content">
                    <h3>{member.name}</h3>
                    <p>{member.description}</p>
                </div>
            </Col>
            <Col xs={6} md={5} lg={5}>
                <MemberImage image={member.image} />
            </Col>
        </Row>
    </Section>
);

export default MemberLarge;
