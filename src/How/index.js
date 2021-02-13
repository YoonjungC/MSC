import React from 'react';
import fs from "fs";
import './index.css';

export default class How extends React.Component {
    render() {
        return (
            <div className="how-container"> 
            <div id="intro"> 
                    <h1> 🌟 How MSC Works 🌟 </h1>
                    <div id="navy-line"> </div>
                    <p> Through volunteer student-to-student tutoring, the MSC aims to be an approachable and purposeful place of learning where students at all levels can seek and receive help </p> 
            </div> 
            <div id="middle">
                <div id="circles"> 
                    <div id="circle"></div>
                    <h4> 1 </h4>
                    <div id="minicircle"></div>
                    <div id="circle"></div>
                    <h4> 2 </h4>
                    <div id="minicircle"></div>
                    <div id="circle"></div>
                    <h4> 3 </h4>
                    <div id="minicircle"></div>
                </div>
                <div id="events">
                    <div id="first"> 
                        <h4> 1 to 1 and Group Tutoring </h4>
                        <p> Tutors are here to support your learning throughout high school. If you feel like you just need to ask a question about homework or need a quick review lesson, contact our tutors </p>
                    </div>
                    <div id="first">
                        <h4> Review Session </h4>
                        <p> The MSC runs student-led review sessions to provide students a overview of concepts learned during the unit</p>
                    </div>
                    <div id="first">
                        <h4> Comprehensive Study Guide </h4>
                        <p> Tutors create study guides to help students reinforce all the concepts they learn throughout the year - the study guide!</p>
                    </div>
                </div>
            </div>
            <div id="initiatives">
                <div id="tutoring"> 
                    <div id="title-container"> 
                        <h4> Tutoring </h4>
                        <div id="blue-line"> </div>
                    </div>
                    <div id="features-container"> 
                        <div className="feature" id="duration">
                            <h4> Duration </h4>
                            <p> Can be as short as 15 minutes or as long as 2 hours. Just need to find a tutor available when you are free. All up to you! </p>
                        </div>
                        <div className="feature" id="focus">
                            <h4> Focus </h4>
                            <p> Upon student's request, the MSC tutors will be able to help, whether it is on campus or online through the MSC discord </p>
                        </div> 
                    </div> 
                </div>
                <div id="tutoring"> 
                    <div id="title-container"> 
                        <h4> Review Session </h4>
                        <div id="second-blue-line"> </div>
                    </div>
                    <div id="features-container"> 
                        <div className="feature" id="duration">
                            <h4> Duration </h4>
                            <p> Can last between 30 minutes to an hour </p>
                        </div>
                        <div className="feature" id="focus">
                            <h4> Focus </h4>
                            <p> Upon teacher's request, the MSC will provide review sessions for any STEM Subjects </p>
                        </div> 
                    </div> 
                </div>
                <div id="tutoring"> 
                    <div id="title-container"> 
                        <h4> Study Guide </h4>
                        <div id="third-blue-line"> </div>
                    </div>
                    <div id="features-container"> 
                        <div className="feature" id="duration">
                            <h4> Duration </h4>
                            <p> Study Guides made by the MSC depends on the Subject </p>
                        </div>
                        <div className="feature" id="focus">
                            <h4> Focus </h4>
                            <p> The MSC creates study guides for STEM Subjects that students can use for studying </p>
                        </div> 
                    </div> 
                </div>
                
            </div>
        </div>
        )
    }
}