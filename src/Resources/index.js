import React from 'react';
import fs from "fs";
import './index.css';


export default class Resources extends React.Component {
    render() {
        return (
            <div className="full-body"> 
            <div id="beginning"> 
                    <h1> Past Review Sessions </h1>
                    <div id="lightblue-line"> </div>
                    <p> Find presentations from review sessions below! </p> 
            </div> 
            <div className="main"> 
                <div id="review-section">
                    <h4> Mathematics </h4>
                    <a href="https://drive.google.com/drive/folders/1wK1_5AjAAWCJzpeiHxouUHipYAxAsxAU?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/cube.png")} width="40px;" /> Geometry </p> </a>
                    <a href="https://drive.google.com/drive/folders/1cn90KWKZ05fwljRJP54NyC-XCvM3FIHw?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/haa.png")} width="40px;" /> Honors Advanced Algebra </p> </a>
                    <a href="https://drive.google.com/drive/folders/1k7TgRAEDD1ahZSU-J93OcqUTV6Inhpb_?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/math.png")} width="40px;" /> Precalculus </p> </a>
                    <a href="https://drive.google.com/drive/folders/1IPwzLZslUAW1Dy9eeSShKIW_Pz2bjMxG?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/root.png")} width="40px;" /> Honors Precalculus </p> </a> 
                    <a href="https://drive.google.com/drive/folders/1T98G-BhpwOTOYI1qVPy5AQMyBPlpEnUA?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/stats.png")} width="40px;" /> AP Statistics </p> </a>
                    <a href="https://drive.google.com/drive/folders/1PxPG3HSpp8I1n1AlyLRDAPS2ax8wEIWN?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/precalc2.png")} width="40px;" /> AP Calc AB </p> </a>
                    <a href="https://drive.google.com/drive/folders/1ueO44Mo_a-VAtkf3yBdnHuGEC0ImS4hD?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/calccop.png")} width="40px;" /> AP Calc BC </p> </a>
                </div>
                <div id="review-section">
                    <h4> Science </h4>
                    <a href="https://drive.google.com/drive/folders/1jf236a640e77i3RmR1DSsjc01pyboNNM?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/chemistry.png")} width="40px;" /> Honors Chemistry </p> </a>
                    <a href="https://drive.google.com/drive/folders/1E2jZcO9wLCbhNzZsNLrAfJwbD2a7XYa9?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/chemis.png")} width="40px;" /> AP Chemistry </p> </a>
                    <a href="https://drive.google.com/drive/folders/1o-WZHPoaFqtAYrmlxAtZLw5PzrI6fSj6?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/plants.png")} width="40px;" /> Biology </p> </a>
                    <a href="https://drive.google.com/drive/folders/17wELK_--Hp7UO5VyGjokiT4tjl7L5YQ1?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/apbio.png")} width="40px;" /> Honors Biology </p> </a>
                    <a href="https://drive.google.com/drive/folders/1lya76ed8vGcJQ2k8CUtMOnIcUxjm2HTR?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/dna.png")} width="40px;" /> AP Biology </p> </a>
                    <a href="https://drive.google.com/drive/folders/1-snYiDkWW--z_TFDhIsCQUgoJKmhm0OK?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/magnet.png")} width="40px;" /> Honors Physics </p> </a>
                    <a href="https://drive.google.com/drive/folders/1XQbDnGHiWiCQwR8dgnaug21Im6XTvVRM?usp=sharing" target="_blank"> <p> <img id="course-icon" src={require("../media/physics.png")} width="40px;" /> AP Physics C  </p> </a>
                </div>
            </div>
            </div>
        )
    }
}