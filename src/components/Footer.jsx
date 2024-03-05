import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";
import mine from '../assets/mine.jpeg'

const Footer = () =>{
    return(
        <footer id="footer">
        <div>
       <img src={mine} alt="Founder"/>

       <h2>Deva Tyagi</h2>
       <p>Success is not final; failure is not fatal:<br></br> It is the courage to continue that counts. </p>
        </div>
          <div>
        <aside>
            <a href="#"><AiFillYoutube /></a>
            <a href="#"><AiFillInstagram /></a>
            <a href="#"><AiFillLinkedin /></a>
        </aside>
       
        </div>
        <a href="#home"><AiOutlineArrowUp/>
        </a>
        </footer>
    )
}
export default Footer;