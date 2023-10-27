import React,{useState} from 'react'
import './about.css'
import Education from './Education'
import Skills from './Skills'
import Award from './Award'
import {Container,Row,Col} from 'reactstrap'
import aboutImg from '../../assests/images/suvarnapic.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

import "remixicon/fonts/remixicon.css";

const About = () => {
  const[aboutFilter, setAboutFilter] = useState('ABOUT')


  return <section id="about">
    <Container>
        <Row>
            <Col lg='12' className='mb-5'><h2>About Me</h2>
            </Col>
            <Col lg='4' md='3'>
                <div className='about_btns d-flex flex-column align-items-center'>
              <button 
              className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn-active' : ''}`} onClick={()=>setAboutFilter
            ('ABOUT')}>
            About me
            </button>
              <button
               className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn-active' : ''}`} onClick={()=>setAboutFilter
            ('EDUCATION')}>
              Education
              </button>

              <button 
              className={`about_btn ${aboutFilter === 'SKILLS' ? 'about_btn-active' : ''}`} onClick={()=>setAboutFilter
            ('SKILLS')}>
              Skills
              </button>
              <button 
              className={`about_btn ${aboutFilter === 'AWARD' ? 'about_btn-active' : ''}`} onClick={()=>setAboutFilter
            ('AWARD')}>
              Awards
              </button>

              </div>
            </Col>
            <Col lg='8' md='9'>
                { aboutFilter ==='ABOUT' && (
               <div className="about_content_wrapper d-flex gap-5">
                
                
                   <div className="about_content"> 
                  <h2>I'm Swati Kushwaha</h2>
                  <p>Experienced developer with 1+ years of expertise in programming languages and software development frameworks, committed to continuous learning and delivering exceptional results.</p>

                    <div className='social_links'>
                        <h6 className='mb-4'>Connect with me:</h6>
                        <span><a href='https://about.instagram.com/'><i class="ri-instagram-line"></i></a></span>
                        <span><a href='#'><i class="ri-github-line"></i></a></span>
                        <span><a href='#'><i class="ri-linkedin-line"></i></a></span>
                    </div>
                </div>
                </div> )}

                {aboutFilter==='EDUCATION' && <Education />}

                {aboutFilter==='SKILLS' && <Skills />}
               { aboutFilter==="AWARD" && <Award />}

            </Col>
        </Row>
    </Container>
  </section>
}

export default About
