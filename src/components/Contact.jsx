import React from 'react'
import './Contact.css'
import theme from '../assets/images/theme_pattern.svg'
import logo from '../assets/images/saboup.png'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);



    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-section-left">
        <img className='image-logo' src={logo} alt="" />
            <h1>Let's Talk</h1>
            <p>You can talk with me by platform you like </p>
            <div className="contact-details">
              <div className='contact-detail'>
                <p>sabonamarara53@gmail.com</p>
              </div>
              <div className='contact-detail'>
                <p>0928860911</p>
              </div>
              <div className='contact-detail'>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' placeholder='Your Name' />
        <label htmlFor="">Your Email</label>
        <input type="email" name='email' placeholder='Your Email' />
        <label htmlFor="">Write message</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button className='contact-sumbit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
