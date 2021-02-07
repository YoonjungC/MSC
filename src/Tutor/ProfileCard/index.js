import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './index.css'; 
// import { COURSE, TUTORS, TIME} from '../../Info';

import IosArrowForward from 'react-ionicons/lib/IosArrowForward'
import IosArrowBack from 'react-ionicons/lib/IosArrowBack'

export default class ProfileCard extends React.Component {

    
    state = {
        show: false,
        // image: require("../../images/" + this.props.tutor.name.replace(/\s+/g, '') + ".jpg")
    }

    toggleModal=(boolValue)=>{
        this.setState({ show: boolValue})
    }

    // displayCourses=()=>{
    //     // let courses = this.props.tutor.course.split(";"); //in each tutor, they have a course and splitting string by ;
    //     return this.props.tutor.course.map((abre) => ( //imediately return div instead of opening a function 
    //         <div>
    //             {COURSE[abre]? COURSE[abre].name : null}
    //         </div>
    //     )) 
    // }
    
    render() {
        // console.log("tutor:", this.props.tutor)
        // console.log(imageurl + fullName + ".png" === "../../images/YoonjungChoi.png")
        return (
            <div id="profile"> 
                    <div id="front"> 
                        <div id="top"> </div>
                        <div id="middle"> 
                            <img id="dummypic" src={this.props.tutor.image} /> 
                            <div id="textInfo"> 
                                    <p> {this.props.tutor.name} </p> 
                                    <p> {this.props.tutor.email} </p>
                            </div>   
                        </div>
                        <div id="bottom"> 
                            <button onClick={()=> { this.toggleModal(true) }}> </button>
                        </div>
                    </div>
                    
                {/* calling props tutor from above */}
            </div>
        )
    }
}
