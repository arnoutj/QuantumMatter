import React from 'react';
import Icon from '../../assets/svg/logo.svg';
import IconInverted from '../../assets/svg/logo-inverted.svg';
import "./logo.scss";

const Logo = ({ labs = [], slug }) => {
    console.log(labs);
    const activeLab = labs.find((lab) => lab.slug === slug);

    return (
        <div className="logo">
            <Icon className="logo_icon" width="40" height="40" />
            <IconInverted className="logo_icon-inverted" width="40" height="40" />
            <span className="logo_text">
                <span className="logo_title">{activeLab ? activeLab.title : "Quantum Materials" }</span>
                <span className="logo_subtitle">{activeLab ? activeLab.subtitle : "Amsterdam"}</span>
            </span>
        </div>
    );
};

export default Logo;
