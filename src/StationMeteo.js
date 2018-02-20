import React, { Component } from 'react';
import './StationMeteo.css';
import Date from './Date';
import background from './images/nuitBackground.svg';
import JoursVenir from './JoursVenir';
import {geolocated} from 'react-geolocated';
import FooterBackground from "./FooterBackground";
import pluieBackground from './images/pluieBackground.svg';

const API_METEO_URL = "https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235";

class StationMeteo extends React.Component {
    render() {
        if (!this.props.isGeolocationAvailable) { //Check si la geolocalisation est dispo
            return <div style={{color:"black"}}>Your browser does not support Geolocation</div>;
        } else if (!this.props.isGeolocationEnabled) { //Check si la geolocalisation est activé
            return <div style={{color:"black"}}>Vous devez activer la géolocalisation</div>;
        } else if (this.props.coords) { //Check si on a bien la propriété coords
            /*{this.props.coords.latitude}
            {this.props.coords.longitude}*/
            return <div style={{color:"black"}}>
                <div style={{width:'100%',height:'100vh',backgroundImage: `url(${background})`,backgroundSize: 'cover',
                    overflow: 'hidden',position:'fixed'}}>
                    <Date />
                    <JoursVenir />
                    <FooterBackground />
                </div>
            </div>
        } else {
            return <div style={{color:"black"}}>Recupération des données de géolocalisation en cours</div>;
        }
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(StationMeteo);