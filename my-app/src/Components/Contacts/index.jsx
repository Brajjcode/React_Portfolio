import React from "react";
import "./styles.css";
import FacebookIcon from "../../assets/facebook-icon.png"
import twittericon from "../../assets/twitter.png"
import instagramicon from "../../assets/instagram.png"

const Contact=()=>{
    return(
        <>
        <section id="contactpage">
        <h2 className="contactpagetitle">Contact Me</h2>
        <span className="contactdesc">Please fill out the form to discuss any work opportunity</span>
        <form  className="contactform">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea name="message" cols="5" rows="10" placeholder="message" className="msg"></textarea>
            <button type="submit" value='send' className="submitbtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="" className="link" />
                <img src={twittericon} alt="" className="link" />
                <img src={instagramicon} alt="" className="link" />
            </div>
        </form>
        </section>
        </>
    )
}
export default Contact;