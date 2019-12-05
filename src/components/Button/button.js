import React from 'react';

import "./button.scss";

const Button = ({ label, onClick, disabled = false }) => (
    <button className="btn" onClick={onClick} disabled={true} aria-disabled={disabled}>
        {label}
    </button>
);

export default Button;
