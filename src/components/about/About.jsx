import React from 'react'
import './about.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


function About (){
  return (
    <section id="about">
      <h2 className="about_heading">My Skills</h2>
      <div className="skills">
        <div className="skillset_frontend">
          <h3>Frontend Development</h3>
          <div className="skillset">
           <article className="skillset_items"> <BsFillPatchCheckFill/><h4>HTML</h4> </article>
           <article className="skillset_items"> <BsFillPatchCheckFill/><h4>CSS</h4></article>
           <article className="skillset_items"> <BsFillPatchCheckFill/><h4>JavaScript</h4></article>
           <article className="skillset_items"> <BsFillPatchCheckFill/><h4>BootStrap</h4></article>
           <article className="skillset_items"> <BsFillPatchCheckFill/><h4>React</h4></article>
          </div>
        </div>
         <div className="skillset_backend">
         <h3>Backend Development</h3>
         <div className="skillset">
          <article className="skillset_items"> <BsFillPatchCheckFill/><h4>Nodejs</h4></article>
          <article className="skillset_items"> <BsFillPatchCheckFill/><h4>Expressjs</h4></article>
          <article className="skillset_items"> <BsFillPatchCheckFill/><h4>Ejs</h4></article>
          <article className="skillset_items"> <BsFillPatchCheckFill/><h4>MongoDB</h4></article>
         </div>
        </div>
      </div>
    </section>
  )
}

export default About