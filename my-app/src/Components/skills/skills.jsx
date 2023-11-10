import React from 'react';
import './skills.css';
import UIdesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'
const Skills=()=>{
      
    return(
        <>
        <section  id='skills'>
        <h2 className="skillTitle">What I do?</h2>
        <span className="skillDesc">As a Frontend Developer Intern,I had the privilege of working alongside experienced web developers to gain practical experience in building responsive and user-friendly web interfaces.</span>
        <div className="skillbars">
            <div className="skillbar">
           <img src={UIdesign} alt="Uidesign"  className='skillBarImg'/>
         <div className="skillBarText">
            <h2>Ui/Ux design</h2>
            <p>This is a demo text</p>
         </div>
            </div>

            <div className="skillbar">
           <img src={webDesign} alt="webdesign"  className='skillBarImg'/>
           
         <div className="skillBarText">
            <h2>Website design</h2>
            <p>This is a demo text</p>
         </div>

            </div>
            <div className="skillbar">
           <img src={Appdesign} alt="appdesdign"  className='skillBarImg'/>

           <div className="skillBarText">
            <h2>Appdesign</h2>
            <p>This is a demo text</p>
         </div>
           
            </div>
        </div>
        </section>

        </>
    )


}
export default Skills;