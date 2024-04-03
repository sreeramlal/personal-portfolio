import React from 'react'
 import email from '../../assets/icons/email.png'
 import linkedin from '../../assets/images/social/linkedln.png'
 
 

function Contact() {
  return (
    <div>
         <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container container_bottom">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:sreeramlalvp123@gmail.com">sreeramlalvp123@gmail.com</a></p>
        </div>
        <div className="contact-info-container container-lin">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/sreeramlal-vp-0b5780238">LinkedIn</a></p>
        </div>
      </div>
    </section>
      </div>
  );
}

export default Contact;
