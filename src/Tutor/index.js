import React from 'react';
import fs from "fs";
import './index.css';
// import { TIME } from '../Info';
import ProfileCard from './ProfileCard';

// const excelToJson = require('convert-excel-to-json');

export default class Tutor extends React.Component {

    state = {
        type: "All",
        course: {}, // control what course is displayed 
        search: "",
        day: "",
        period: "",
        showPeriod: false,
        showDay: false,
        close: false,
        tutors: [],
        courseData: {}
    }

    componentDidMount(){
       fetch("https://api.airtable.com/v0/appJM97QOTKmMTpXC/TUTORS", {
           method: 'GET',
           headers: {
                Authorization: "Bearer keyMn7hAbJRjCQf0z"
           }
       })
       .then(res => res.json())
        .then((result) => {
            // console.log("result: ", result)
            let records = result.records
            let tutor_data = records.map(item => {
                return item.fields
            })
            .map(item => {
                if (!item.time) return
                let times = item.time.split('\n');
                item.time = times.map(time => {
                    let value = time.split(",")
                    return {
                        day: value[0],
                        period: value[1]
                    }
                })
                if (!item.course) return
                item.course = item.course.split('\n');
                return item
            })
            console.log('Tutor Data: ', tutor_data)
            this.setState({tutors: tutor_data.filter((t) => !!t) })  //!! means boolean
        })
        fetch("https://api.airtable.com/v0/appJM97QOTKmMTpXC/COURSE", {
           method: 'GET',
           headers: {
                Authorization: "Bearer keyMn7hAbJRjCQf0z"
           }
       })
       .then(res => res.json())
        .then((result) => {
            let records = result.records
            let course_data = records.map(item => {
                    return item.fields
            })
            console.log('Course Data:', course_data)
            let final_courses = {}
            for(let i = 0; i<course_data.length; i++) {
                console.log("course", course_data[i])
                let course = course_data[i]
                if(Object.keys(course).length){
                    final_courses[course.abr] = course
                }
            }
            console.log('final courses:', final_courses)
            this.setState({courseData: final_courses})
        })
    }

    onInputChange=async(evt)=>{
        await this.setState({search: evt.target.value})
    }
    
    onTypeChange=(type)=> {
        this.setState({ type, course: {}, period: "", day: "" })
    }

    sortCourse=(course)=> {
        console.log('course:', course)
        if(this.state.search.length>0) //the text input in search bar is stored in this.state.search that checks the entire course array from "All" to see which course has a name that is the same as the input course in the search bar. 
        {
            return course.name.toLowerCase().includes(this.state.search.toLowerCase()) 
        }
        return true;
    }

    filterTutors=()=> { //only check day and period of available tutor - Not the course
        return this.state.tutors
        .filter((tutor) => {
            if (this.state.day.length === 0) {
                return true;
            } else {
                const available_times = tutor.time.filter((time) => time.day === this.state.day) //array of all available times of tutor on selected day
                return available_times.length !== 0
            }
        })
        .filter((tutor) => {
            if (this.state.period.length === 0) {
                return true;
            } else {
                const available_periods = tutor.time.filter((time) => time.day === this.state.day && time.period === this.state.period)
                return available_periods.length !== 0
            }
        })
        .filter((tutor) => {
            if (Object.keys(this.state.course).length === 0) {
                return true;
            } 
            else { 
                return tutor.course.includes(this.state.course.abr)
            }
        })
    }

    render() {
        return (
            <div className="Tab-Main">
                {/* <div className="intro"> 
                    <h1> TUTORS </h1> 
                </div> */}
                <div className="top">
                    <input type="text" value={this.state.search} onChange={this.onInputChange} placeholder="Search for Courses..." id="search-field"/> 
                    <div id="button-wrapper"> 
                        <button id="all" onClick={()=>{this.onTypeChange("All")}}> All </button>
                        <button id="math" onClick={()=>{ this.setState({ type: "Math", course: {}, day: "", period: "" })}}> Math </button>
                        <button id="science" onClick={()=> { this.setState({ type: "Science", course: {}, day: "", period: "" })}}> Science </button>
                    <div class="dropdown"> 
                        <button class="dropbtn" id="day" onClick={()=>{ this.setState({ showDay: !this.state.showDay, showPeriod: false })}}> Day</button> 
                        { this.state.showDay ? 
                         <div class="dropdown-content"> 
                            <button className={this.state.day==="DAY1" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY1" ? "" : "DAY1", period: "" })}}> Day 1</button> 
                            <button className={this.state.day==="DAY2" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY2" ? "" : "DAY2", period: "" })}}> Day 2</button> 
                            <button className={this.state.day==="DAY3" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY3" ? "" : "DAY3", period: "" })}}> Day 3</button> 
                            <button className={this.state.day==="DAY4" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY4" ? "" : "DAY4", period: "" })}}> Day 4</button> 
                            <button className={this.state.day==="DAY5" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY5" ? "" : "DAY5", period: "" })}}> Day 5</button> 
                            <button className={this.state.day==="DAY6" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY6" ? "" : "DAY6", period: "" })}}> Day 6</button> 
                            <button className={this.state.day==="DAY7" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY7" ? "" : "DAY7", period: "" })}}> Day 7</button> 
                            <button className={this.state.day==="DAY8" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY8" ? "" : "DAY8", period: "" })}}> Day 8</button> 
                            <button className={this.state.day==="DAY9" ? "Selected" : ""} onClick={()=>{ this.setState({ day: this.state.day=="DAY9" ? "" : "DAY9", period: "" })}}> Day 9</button> 
                        </div> : null
                        }
                    </div>
                    <div class="dropdown"> 
                        <button class="dropbtn" id="period" onClick={()=>{ this.setState({ showPeriod: !this.state.showPeriod, showDay: false })}}> Period</button> 
                        {  this.state.showPeriod ? 
                        <div class="dropdown-content"> 
                            <button className={this.state.period==="P1" ? "Selected" : ""} onClick={()=>{ this.setState({ period: this.state.period=="P1" ? "" : "P1"})}}> 1st Period </button>
                            <button className={this.state.period==="P2" ? "Selected" : ""} onClick={()=>{ this.setState({ period: this.state.period=="P2" ? "" : "P2"})}}> 2nd Period </button>
                            <button className={this.state.period==="P3" ? "Selected" : ""} onClick={()=>{ this.setState({ period: this.state.period=="P3" ? "" : "P3"})}}> 3rd Period </button>
                            <button className={this.state.period==="P4" ? "Selected" : ""} onClick={()=>{ this.setState({ period: this.state.period=="P4" ? "" : "P4"})}}> 4th Period </button>
                        </div>
                        : null
                        }
                    </div>
                    </div>
                </div>
                <div id="main-section"> 
                <div className="left">
                    <div id="courseScroll"> 
                        {   
                            Object
                            .values(this.state.courseData) //to make object -> array
                            .filter((course)=> this.state.type === "All"? true: course.type === this.state.type)
                            .filter(this.sortCourse)
                            .map(course => (
                                <div id="soloCourse">
                                    <h4 onClick={()=>this.setState({ course, day: "", period: "" })}> {course.name} </h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right">
                    { 
                        this.filterTutors().length === 0 ? //checking if there is no tutors at all at the selected day and period
                            ( 
                                <div>
                                    <p> Sorry, there are no tutors that are available during this period. </p>
                                </div>
                                )
                                : this.filterTutors()
                                    .map(tutor => ( //filter by day and period
                                    <ProfileCard tutor={tutor}/>
                                )
                            )  
                    }
                </div>
                </div>
            </div>
        )
    }
}
 
//NOTE: 
//filtering tutors (filterTutors())
//case 1 and case 2 
// with course/ without course

//1. filter day and period
//2. check if course is selected
//3. if no course, pass (return true)
//4. if yes course selected, return the course filtered tutors 