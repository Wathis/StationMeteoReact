import React, { Component } from 'react';
import './Date.css';

export default class Date extends React.Component {
    render() {
        return (
            <div class="">
                <div class="heure">12h30</div>
                <div class="journee">Samedi 10 Février</div>
                <div class="degres">10 °C</div>
            </div>
        );
    }
}
