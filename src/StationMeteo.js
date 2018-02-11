import React, { Component } from 'react';
import './StationMeteo.css';
import Date from './Date';
import background from './images/nuitBackground.svg';
import JoursVenir from './JoursVenir';
import FooterBackground from "./FooterBackground";
import pluieBackground from './images/pluieBackground.svg';

export default class StationMeteo extends React.Component {
    render() {
        return (
            <div style={{width:'100%',height:'100vh',backgroundImage: `url(${background})`,backgroundSize: 'cover',
                overflow: 'hidden',position:'fixed'}}>
                 <Date />
                <JoursVenir />
                <FooterBackground />
            </div>
        );
    }
}
