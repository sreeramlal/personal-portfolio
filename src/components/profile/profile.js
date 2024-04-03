import React from 'react'
  
 

function Profile() {
  return (
    <div>
       <section id="profile">
      {/* <div className="section__pic-container">
        <img className="image_round" src={profile_img} alt="profile_img" />
      </div> */}
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Full Stack Developer <br /> Specializing in ReactJS</h1>
         <div className="btn-container">
        <a href="https://www.linkedin.com/in/sreeramlal-vp-0b5780238/"><button className="btn btn-color-2">LinkedIn</button></a> 
          
          
           
        </div>
         
      </div>
    </section>
      </div>
  );
}

export default Profile;
