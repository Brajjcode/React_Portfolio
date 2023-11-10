
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import contact from "../../assets/contact.png"
import Button from "../Button/Button";
import "./navbar.css"
const Navbar=()=>{
    return(
        <>
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>

          <div className="desktopmenu">

          <Link activeClass="active"  to="intro" spy={true} offset={-100} duration={2000}className="homeabout">Home</Link>
          <Link activeClass="active"  to="skills" spy={true} offset={-100} duration={2000}className="homeabout">About</Link>
          <Link activeClass="active"  to="portfolio" spy={true} offset={-100} duration={2000}className="homeabout">Portfolio</Link>
          
          </div>

          <Button classses="Desktopmenubtn">
             <img src={contact} alt="contact" className="contact"></img>
             Contact Me
             </Button>
             

            
        </div>
        </>
    )
}

export default Navbar;