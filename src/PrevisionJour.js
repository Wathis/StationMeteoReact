import React,{ Component } from 'react';
import './PrevisionJour.css';

export default class PrevisionJour extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="containerPrevisionJour">
                <div>{this.props.jour}</div>
                <img src={this.props.image} alt="Nuage" height="60" width="60" />
                <div>{this.props.degres} °C</div>
            </div>

        );
    }

}