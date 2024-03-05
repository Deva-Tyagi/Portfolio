import React, { useRef } from "react";
import {animate, motion} from 'framer-motion';
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/me.png'

const Home = () =>{

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = ()=>{
        animate(0,100,{
            duration:1.5,
            onUpdate:(v)=>clientCount.current.textContent = v.toFixed(),
        })
    }

    const animationProjectsCount = ()=>{
        animate(0,500,{
            duration:1.5,
            onUpdate:(v)=>projectCount.current.textContent = v.toFixed(),
        })
    }
    const animation = {
        h1:{
            initial: {
                x: '-100%',
                opacity:0,
            },
            whileInView: {
                x:0,
                opacity:1
            },
        },
        button:{
            initial: {
                y: '-100%',
                opacity:0,
            },
            whileInView: {
                y:0,
                opacity:1
            },
        },
    };

     
    return(
        <>
        <div id="home">
            <section className="section">
            <section className="section1">
            <div className="div1">
                 <motion.h1 {...animation.h1}>
                    Hi, I Am <br/> Deva Tyagi
                 </motion.h1>

                 <Typewriter
                 options={{
                    strings:['A Developer', 'A Designer', 'A Creator'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName:'typewriterpara',
                 }} />

                 <div className="div2">
                    <a href="mailto:devadixit1999@gmail.com" className="a1">Hire Me</a>
                    <a href="#work" className="a2">Projects <BsArrowUpRight />
                    </a>
                 </div>

                 <article>
                    <p>
                       +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                    </p>
                    <span className="span">Clients Worldwide</span>
                 </article>

                 <aside>
                    <article>
                 <p>
                 +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                    </p>
                    <span className="span">Project Made</span>
                    </article>

                    <article data-special> 
                     <p> Contact </p>
                    <span>devadixit1999@gmail.com</span>
                    </article>
                 </aside>
            </div>
            </section>
              <section className="section2">
                <img src={me} alt="Deva" />
              </section>
              </section> 
             

             <a href="#footer"><BsChevronDown className="svg" /></a> 
        </div>
        
        </>
    )
}


export default Home;