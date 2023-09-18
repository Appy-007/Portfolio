import React from 'react'
import './header.css'
import intro_pic from '../../assets/intro_pic.png'



function Header(){
  return (
   <section id="intro">
    <div className="intro_content">
      <p className="intro_para1">Hello</p>
      <p className="intro_para2">I'm <span className="intro_name">Apratim</span><br/>An aspiring Web Developer </p>
      <p className="intro_para3">I am a current undergraduate student with an interest in web developement </p>
    </div>
    <img src={intro_pic} alt="" className="intro_img" />
   </section>
  )
}

export default Header