import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import "./message.scss";

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
