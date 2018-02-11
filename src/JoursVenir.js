import React, { Component } from 'react';
import PrevisionJour from './PrevisionJour';
import './JourVenir.css';
import nuage from './images/nuage.svg';
import neige from './images/neige.svg';
import pluie from './images/pluie.svg';
import soleil from './images/soleil.svg';

export default class JoursVenir extends React.Component {
    render() {
        return (
           <div className="container">
               <PrevisionJour jour={"Dimanche"} image={nuage} degres={17}/>
               <PrevisionJour jour={"Lundi"} image={soleil} degres={20}/>
               <PrevisionJour jour={"Mardi"} image={pluie} degres={10}/>
               <PrevisionJour jour={"Mercredi"} image={neige} degres={0}/>
           </div>
        );
    }
}
