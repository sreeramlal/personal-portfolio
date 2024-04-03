import React from 'react';
// import profile_img from '../../assets/images/profile/sreeram.jpg';
 import education from '../../assets/icons/education.png';
import experience from '../../assets/icons/experience.png';
import checkmark from '../../assets/icons/checkmark.png';




function About() {
  return (
    <div>
       <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
         
        <div className="about-details-container">
        <div className="text-container">
            <p>
            I'm Sreeramlal, a Full Stack Developer specializing in the MERN stack. With a strong foundation in React.js, Node.js, Express.js and MongoDB, coupled with proficiency in JavaScript, HTML, and CSS, I'm ready to contribute my expertise to innovative projects. <br/><br/>

As a proactive problem-solver and creative thinker, I'm keen to join forward-thinking teams where I can bring imagination to life through code. I'm excited about the prospect of collaborating on dynamic web development projects that push boundaries and drive impact.<br/><br/>

If you're seeking a passionate Full Stack Developer ready to hit the ground running, I'm ready to join your team. Let's connect and explore how I can contribute to your organization's success.<br/><br/>

Feel free to reach out to me at sreeramlalvp123@gmail.com to discuss potential job opportunities or to schedule an interview. <br/><br/>

Looking forward to the possibility of working together!
            </p> <br/> <br/>
            
          </div>
          
         
        </div>
      </div>
      <div className="about-containers">
            
            <div className="details-container">
                
            <h2 className="experience-sub-title">Internships</h2>
                <div className="intern_container">
                <div className='article_container'>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Teaching Assistant</h3>
                    <p>GeeksforGeeks</p>
                  </div>
                </div>
                <div className='article_container'>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Full Stack Developer</h3>
                    <p>Techmindz</p>
                  </div>
                </div>
                </div>
                {/* <div className='intern_container'>
  
                <p className='intern_text'> Teaching Assistant [Geeksforgeeks]</p>
                <p className='intern_text intern_text_dev'> Full Stack Developer [Techmindz]</p>
                </div> */}
              </div>
              
            </div>
       
    </section>
      </div>
  );
}

export default About;
