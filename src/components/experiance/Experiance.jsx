import React from 'react'
import './experiance.css'
import {Container,Row, Col} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const developmentExperianceData=[
    {
        Employeer:'Persistent Systems',
        year:'2022 - Present',
        title:'Software Engineer',
        desc: 'Design and implementing Java Based Applications.I worked on front end technologies. I participated in an Amazon Code Whisperer activity, where I developed an API for users and employyes. I have skills on React Js,CSS, Core-Java, Spring boot. '

    },
    {
        Employeer:'Persistent Systems',
        year:'2022 - 2022',
        title:'Software Engineer Intern',
        desc: 'Trained on Core-Java, Spring boot, HTML/CSS, SQL during my internship.'
    },
    {
        Employeer:'IIT Roorkee',
        year:'2021 - 2021',
        title:'Web Development Intern',
        desc: 'My Internship involved working on front-end technologies and created virtual labs for electrical experiments.'
    }

]

const Experiance = () => {
  return (
    <section id='experiance'>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
             <h2>Experience</h2>

             </Col>
               <Col lg="12" md="12">
                <div className="single_experiance-container">
                    {
                        developmentExperianceData.map((item,index)=> (

                            <div className="single_experiance" key={index}>
                            <span className='experiance_icon'>
                                <i class="ri-briefcase-line"></i> </span>
                                <h4>{item.Employeer}</h4>
                                <h6>{item.year}</h6>

                            
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                           
                          </div>
                          )  )
                    }
                </div>
               </Col>

               {/* <Col lg="6" md="6">
                <div className="single_experiance-container">
                    {
                        developmentExperianceData.map((item,index)=> (

                            <div className="single_experiance" key={index}>
                            <span className='experiance_icon'>
                                <i class="ri-briefcase-line"></i> </span>
                                <h6>{item.year}</h6>
                            
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                           
                          </div>
                          )  )
                    }
                </div>
               </Col> */}




            </Row>
        </Container>
    </section>
   
  )
}

export default Experiance
