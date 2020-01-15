import React from 'react';
import Icon from '../../assets/svg/logo.svg';
import "./logo.scss";

const Logo = ({ labs = [], slug }) => {
    console.log(labs);
    const activeLab = labs.find((lab) => lab.slug === slug);

    return (
        <div className="logo">
            <Icon width="40" />
            <span className="logo_text">
                <span className="logo_title">{activeLab ? activeLab.title : "Quantum Materials" }</span>
                <span className="logo_subtitle">{activeLab ? activeLab.subtitle : "Amsterdam"}</span>
            </span>
        </div>
    );
};

export default Logo;
