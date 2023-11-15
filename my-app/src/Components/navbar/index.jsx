
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import contact from "../../assets/contact.png"
import Button from "../Button";
import "./styles.css"
const Navbar=()=>{
    function scroll(){
        document.getElementById('contactpage').scrollIntoView({behavior:'smooth'})
    }
    return(
        <>
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>

          <div className="desktopmenu">

          <Link activeClass="active"  to="intro" spy={true} smooth={true}  offset={-90} duration={500}className="homeabout">Home</Link>
          <Link activeClass="active"  to="skills" spy={true} smooth={true} offset={-90} duration={500}className="homeabout">About</Link>
          <Link activeClass="active"  to="portfolio" spy={true} smooth={true} offset={-90} duration={500}className="homeabout">Portfolio</Link>
          
          </div>

          <Button classses="Desktopmenubtn" actionhandler={scroll} >
             <img src={contact} alt="contact" className="contact"></img>
             Contact Me
             </Button>
             

            
        </div>
        </>
    )
}

export default Navbar;