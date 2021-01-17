import React from 'react';
import './index.css';


export default class Schedule extends React.Component {
    render() {
        return (
            <div className="schedule">
                <div id="intro"> 
                    <h1> Schedule </h1>
                    <div id="schedule-line"> </div>
                </div> 
                <img id="pic" src={require("../media/schedule.png")} alt="top"/> 
            </div>
        )
    }
}
 