import React from "react";
import "./index.css";

export default class About extends React.Component {
    render() {
        return (
            <div className="all-section">
                <div id="intro"> 
                    <h1> HELLO </h1>
                    <div id="custom-navy-line"> </div>
                </div> 
                <div id="text-section"> 
                    <div id="about"> 
                        <h1> About Us </h1>    
                        <p>  Through volunteer student-to-student tutoring, the MSC aims to be an approachable and purposeful place of learning where students at all levels can seek and receive help. It consists of approximately 40 dedicated tutors, and applications are sent out at the beginning of each semester. </p> 
                    </div>
                    <div id="mission"> 
                        <h1> Our Mission </h1>
                        <p> The MSC is a student-run organization which strives to further both the understanding and appreciation of math and science in the school community.  </p>
                    </div>
                </div> 
                <div id="leaders"> 
                    <h1> Meet the Leaders </h1>
                    <div id="leaders-wrapper"> 
                        <div id="leader-section">
                        <div className="image-cropper" id="first"> 
                                <img className="profile-pic" src={require("../media/dummypic.jpg")} /> 
                        </div>
                        <h4> Clara Kim </h4>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> 
                        </div>
                        <div id="leader-section">
                        <div className="image-cropper" id="first"> 
                                <img className="profile-pic" src={require("../media/dummypic.jpg")} /> 
                        </div>
                        <h4> Chris Wang </h4>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> 
                        </div>
                        <div id="leader-section">
                            <div className="image-cropper" id="first"> 
                                    <img className="profile-pic" src={require("../media/dummypic.jpg")} /> 
                            </div>
                            <div id="leader-profiletext">
                                <h4> Carolyn Rong </h4>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> 
                            </div>
                        </div>
                    </div>
                </div> 
                <div id="application">
                    <div id="title">
                        <h1> MSC Application Process </h1>
                        <p> Tutor Applications are released in the beginning of semester 1 and semester 2. Follow us on instagram for more updates! </p>
                        <div id="instagram-post">
                            <img id="codeinstagram" src={require("../media/applicationpost.png")} width="200px"/> 
                        </div>
                    </div>
                    <div id="info-section">
                        <h1> Info </h1>
                        <p> Join our Discord and get the newest information! If you have any question, feel free to dm us at @hkis_msc or message through the discord. We will get back to you as soon as possible! </p>
                        <div id="discord-code">
                            <img id="codediscord" src={require("../media/codediscord.png")} width="200px"/> 
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}
 
 