import "./intro.css"
import bg from '../../assets/brajj.png-removebg-preview.png'
import { Link } from "react-scroll"
import Button from "../Button/Button"
import hire from "../../assets/hireme.png"
const Intro=()=>{
    return(
        <>
        <div className="intro">
            
                <section id="id">
                    <div className="introContent">
                        <span className="hello"> Hello,</span>
                        <span className="introText">I'm <span className="introname">Brajaditya</span><br/>Website Designer
                        </span>

                        <p className="intropara">I am a skilled web designer with experience in creating visually appealing and user friendly website.</p>
                         <Link><Button classes="btnIntro" >
                            <img src={hire} alt="hire" className="hireImg" />
                            Hire Me
                            </Button></Link>
                    </div>
                    <img src={bg} alt="" className="bg" />
                </section>
            

        </div>
        </>
    )
}

export default Intro;