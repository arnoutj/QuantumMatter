import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import Section from '../Section/section';
import MemberImage from '../MemberImage/memberImage';

import "./memberSection.scss";

const MemberSection = ({ member }) => (
    <Section className="dark">
        <Row>
            <Col xs={12} md={8} mdOffset={2}>
            <MemberSectionMember member={member} />
            </Col>
        </Row>
    </Section>
);

export const MemberSectionColumns = ({ members }) => (
    <Section className="dark">
        <Row>
            <Col xs={12} md={10} mdOffset={1}>
                <Row>
                    {members.map((member, key) => (
                        <Col xs={12} md={6}>
                            <MemberSectionMember member={member} key={key} small />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </Section>
);

const MemberSectionMember = ({ member, small }) => (
    <div className={`member-section_member ${small ? 'small' : null}`}>
        <div className="member-section_content">
            <h3>{member.name}</h3>
            <p>{member.description}</p>
        </div>
        <MemberImage image={member.image} />
    </div>
);

export default MemberSection;
