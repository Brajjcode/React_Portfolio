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
                    <p>MyWord Dictionary App is a versatile and user-friendly dictionary application built with HTML, CSS and JavaScript. This app
allows users to instantly access word definitions, listen to pronunciation, and save their search history</p>
                    <a href="https://jazzy-malasada-291f16.netlify.app/" target="_blank"><box-icon name='link-external'></box-icon></a>
                </div>
            </div>

    
                <div class="portfolio-box">
                    <img src={work2} alt=""/>
                    <div class="portfolio-layer">
                        <h4>Meal Planner</h4>
                        <p>The NutriPlan Meal Planner App, crafted using HTML, CSS, and JavaScript, is your personal nutrition guide. Input your height,weight, age, gender, and activity level, and let it generate customized breakfast, lunch, and dinner meal plans to meet your unique health and fitness goals.</p>
                    <a href="https://eclectic-pothos-3f8def.netlify.app" target="_blank"><box-icon name='link-external'></box-icon></a>
                    </div>
                </div>
                    <div class="portfolio-box">
                        <img src={work3} alt=""/>
                        <div class="portfolio-layer">
                            <h4>News App</h4>
                            <p>The News App is a web-based application that provides users with access to real-time news articles from various sources around the world. It leverages a third-party news API to fetch and display the latest headlines, articles, and news categories.</p>
                            <a className="link" href="#"><box-icon name='link-external'></box-icon></a>
                        </div>
                        

            </div>
        </div>
    </section>
        </>
    )
}

export default Projects;
