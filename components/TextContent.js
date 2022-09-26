import React from "react"

export default function TextContent(){
    return (
        <div className="MainContentWrap">
        <h1 className="Name">Meemo</h1>
        <h4 className="Role">Frontend Developer</h4>
        <small className="Website">meemo.website</small>
        <div className="ButtonWrap">
        <button className="Email Btn-common-code"><img src="../images/EmailIcon.png" />Email</button>
        <button className="LinkedIn Btn-common-code"><img src="../images/LinkedInLogo.png" />LinkedIn</button>
        </div>
        <h1 className="">About</h1>
        <p>I am a frontend developer with a particular interest in making things <span className="catt"> fishy </span> and <span className="catt"> purrfectly </span> automating daily tasks. I try to keep up with security and best practices, and am always looking for new <span className="catt"> dogs </span>  to <span className="catt"> befriend</span>.</p>
        <h1 className="">Interests</h1>
        <p><span className="catt"> Fish </span>expert. Music scholar (plays <span className="catt"> purrcussions</span>). Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}