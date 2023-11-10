import React from "react";
import "./Projects.css"
import Work1 from "../../assets/work-1.png";
import work2 from "../../assets/work-2.png";
import work3 from "../../assets/work-3.png"
import link from "../../assets/link-external-regular-24.png";

const Projects=()=>{
    return(
        <>
         <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Project</span></h2>
        <div class="portfolio-container">
            
            <div class="portfolio-box">
                <img src={Work1} alt=""/>
                <div class="portfolio-layer">
                    <h4>Dictionary App</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque deserunt voluptates illo explicabo tempore culpa beatae! Eos facere ullam quis natus corrupti sunt, error accusamus nostrum ut ipsum eligendi.</p>
                <a href="#"><box-icon name='link-external'></box-icon></a>
                </div>
            </div>

    
                <div class="portfolio-box">
                    <img src={work2} alt=""/>
                    <div class="portfolio-layer">
                        <h4>Applications</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque deserunt voluptates illo explicabo tempore culpa beatae! Eos facere ullam quis natus corrupti sunt, error accusamus nostrum ut ipsum eligendi.</p>
                    <a href="#"><box-icon name='link-external'></box-icon></a>
                    </div>
                </div>
                    <div class="portfolio-box">
                        <img src={work3} alt=""/>
                        <div class="portfolio-layer">
                            <h4>Applications</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque deserunt voluptates illo explicabo tempore culpa beatae! Eos facere ullam quis natus corrupti sunt, error accusamus nostrum ut ipsum eligendi.</p>
                        <a href="#"><img href={link} alt="link"/></a>
                        </div>
                        

            </div>
        </div>
    </section>
        </>
    )
}

export default Projects;
