import React from 'react';
import logo from '../../assets/images/logo.png';
import classes from './header.module.css';

export const Header = props => {

    return (
        <header className={`${classes.header} center`}>
            <img src={logo} alt="logo" />
        </header>
    );

};

