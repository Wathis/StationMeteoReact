import React, { Component } from 'react';
import './Date.css';
import footerNuit from './images/nuitFooter.svg';

export default class FooterBackground extends React.Component {
    render() {
        return (
            <div style={{height:'20vh',backgroundImage:`url(${footerNuit})`,backgroundSize: 'cover',position:'fixed',bottom:0,width : '100%'}}></div>
        );
    }
}
