import React from "react";
import "./index.css";
import Card from '../Card';
import { EVENT } from "../Info";


export default class Home extends React.Component {
  space = React.createRef()

  goToBottom=()=> {
    this.space.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  render() {
    return (
      <div id="main-wrapper"> 
        <div className="home">
          <div id="left">
            <h1> The Math and Science Center </h1>
            <p> 1 to 1 Tutoring, flexible timing, student led review sessions </p>
            <button onClick={()=>(this.goToBottom())}> How it works </button> 
          </div>
          <div id="right">
          <img id="background" src={require("../media/homeBackground.png")} alt="top"/>
          </div>
        </div>
        <div className="space" ref={this.space}> </div>
        <div className="events">
            <h3> What is the MSC </h3>
            <div id="features">
              <div id="card-wrapper"> 
            {
            EVENT
            .map(event => (  
              <Card event={event}/>
            ))
            }
            </div>
            </div>
        </div>
      </div>
    );
  }
}
