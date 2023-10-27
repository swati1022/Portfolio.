import React, {useRef, useEffect}from 'react'
import './hero-section.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from 'reactstrap'
import suvarnapic from "../../assests/images/suvarnapic.jpg"
import {Link} from 'react-router-dom';

// import {init} from 'ityped';
import Typed from "typed.js";

const HeroSection = () => {
    const textRef = useRef(null);

    useEffect(() => {
      const typed = new Typed(textRef.current, {
        strings: ['Swati Kushwaha', 'a Software Engineer '], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        loop: true,
        showCursor: true,
        backSpeed: 100,
        backDelay: 100
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  return( 
  <section className='hero_section' id="home" >
   <Container>
    <Row>
        <Col lg="12" md="12">
            <div className='hero_content'>
                <p className='mb-3'>Welcome..</p>
                <h5 className='mb-4'></h5>
                
                <h2 className='hero_title mb-4'>  
                    I'm <span ref={textRef}> </span>
                    </h2>
                <p>Experienced developer with 1+ years of expertise in programming languages and software development frameworks, committed to continuous learning and delivering exceptional results. </p>

                <div className=" mt-4 hero_btns d-flex align-items-center gap-4">
                <button className='btn hire_btn'>Hire Me</button>
               <button className="btn contact_btn">Contact</button>
               
               </div>
            </div>
        </Col>
        
    </Row>
   </Container>
  </section>
  )
}

export default HeroSection
