import React from 'react';
import './styles.css';
import UIdesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'
import school from '../../assets/julien_day_logo-transformed.png'
import college from '../../assets/cgc.png'
import newton from '../../assets/newton.webp'
const Skills=()=>{
      
    return(
        <>
        <section  id='skills'>
        <h2 className="skillTitle">What I do?</h2>
        <span className="skillDesc">As a Frontend Developer Intern,I had the privilege of working alongside experienced web developers to gain practical experience in building responsive and user-friendly web interfaces below is mine journey towards web development.</span>
        <div className="skillbars">
            <div className="skillbar">
           <img src={school} alt="Uidesign"  className='skillBarImg'/>
         <div className="skillBarText">
            <h2>Schooling</h2>
            <p>Completed my schooling from Julien day school secured 73.5 in 10th and 80% in 10+2.Learned basics of Java and HTML in class 10th and 12th.</p>
         </div>
            </div>

            <div className="skillbar">
           <img src={college} alt="webdesign"  className='skillBarImg'/>
           
         <div className="skillBarText">
            <h2>College</h2>
            <p>Completed my B.Tech from Chandigarh Engineering college in Mechanical Engineering and secured 7.4 cgpa.Enhanced my coding skills by participating
               in various tech events and competetion.
            </p>
         </div>

            </div>
            <div className="skillbar">
           <img src={newton} alt="appdesdign"  className='skillBarImg'/>

           <div className="skillBarText">
            <h2>Web Development Certification</h2>
            <p>Persuing full stack development course from Newton school.Learned and became proeficient in HTML,CSS,Javascript and React framework.</p>
         </div>
           
            </div>

           
        </div>
        </section>

        </>
    )


}
export default Skills;