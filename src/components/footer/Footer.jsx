import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

function Footer(){
  return (
    <section id="footer">
       <div className="footer_icons">
       <article className="footer_img"><BsFacebook/></article>
       <article className="footer_img"> <BsLinkedin/> </article>
       <article className="footer_img"> <FaInstagramSquare/> </article>
       </div>
       <div className="footer_para">Made by Apratim__</div>
    </section>
  )
}

export default Footer