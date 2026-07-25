import React from 'react'
import './Hero.css'
import profile from '../assets/images/saboup.png'
import qrcode from '../assets/images/web.png'
import resume from '../assets/resume/Sabona_Marara_Resume.pdf.pdf'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt="" className='proimg' />
      <img src={qrcode} alt="" className='qrcode' />
      <h1><span>Hi, I'm Sabona Marara</span></h1>
      <h1>Empowering Progress Through Software.</h1>
      <div className="hero-action">
        <div className="hero-connect">
          {/* <a className='anchor-link' href='#contact'>connect with me</a> */}
        </div>
        <div className="hero-resume">
          <a href={resume} download="Sabona_Marara_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero