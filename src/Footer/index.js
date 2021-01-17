import React from "react";
import "./index.css";
import MdChatboxes from "react-ionicons/lib/MdChatboxes";
import IosSchool from "react-ionicons/lib/IosSchool";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

const Footer = () => (
    <div id="footer">
          <div id="links"> 
          <h4> Connect with Us </h4>
            <div id="social">
              <a href="https://www.instagram.com/hkis_msc/?hl=en" target="_blank"> <img id="app" src={require("../media/instagram.png")}/> </a>
              <a href="https://schoology.hkis.edu.hk/group/1216200222" target="_blank">  <img id="app" src={require("../media/school.png")}/></a>
              <a href="https://discord.com/invite/SSx98bt" target="_blank"> <img id="app" src={require("../media/discord.png")}/></a>
            </div>
            <div id="useful">
              <h4> Useful Links </h4>
              <a href="https://qrgo.page.link/VSm6T" target="_blank"> Request a Review Session </a>
            </div>
          </div>
          <div id="contact"> 
            <h4> MSC Leaders Contact </h4>
            <div id="info"> 
              <div id="left">  
                <h5> Name </h5>
                <div> 
                  <p> Clara Hyeryn Kim </p>
                  <p> Christopher Wang </p>
                  <p> Carolyn Rong </p>
                </div>
              </div>
              <div> 
                <h5> Email </h5>
                <div>
                  <p> 230579@hkis.edu.hk </p>
                  <p> 230579@hkis.edu.hk</p>
                  <p> 230579@hkis.edu.hk</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
  
  export default Footer;