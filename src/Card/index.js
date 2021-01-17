import React from "react";
import "./index.css";

export default class Card extends React.Component {
    render () {
        return (
            <div id="full-card"> 
                <div id="top-border"> </div>
                <div id="homeCard"> 
                    <h4> {this.props.event.name} </h4> 
                    <div id="list"> 
                        <p id="point"> ○ {this.props.event.first} </p>
                        <p id="point"> ○ {this.props.event.second} </p>
                        <p id="point"> ○ {this.props.event.third} </p>
                        <p id="point"> ○ {this.props.event.fourth} </p>
                    </div>
                </div>
            </div>

        )
    }
}