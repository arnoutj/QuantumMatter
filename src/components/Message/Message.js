import React from 'react';

import "./message.scss";
import Section from '../Section/section';
import { Row, Col } from 'react-flexbox-grid';

const Message = ({ showIfEmpty }) => {
    if(showIfEmpty && (!showIfEmpty.data || !showIfEmpty.data.length)) {
        return (
            <Row center="sm">
                <Col xs={12} sm={6}>
                    <div className="message">
                        <h2 className="message_title">Oops!</h2>
                        <span>There are no {showIfEmpty.type || 'items'} to be seen here.</span>
                    </div>
                </Col>
            </Row>
        );
    }
    return null;
};

export default Message;
