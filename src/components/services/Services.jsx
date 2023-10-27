import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import "remixicon/fonts/remixicon.css";
import "./services.css"
import "bootstrap/dist/css/bootstrap.min.css";

const servicesData=[
{

    icon:'ri-code-line',
    title:' Web Design',
    desc: 'Designed engaging and responsive landing pages.I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks.'
},

{

    icon:'ri-code-s-slash-line',
    title:' Web Development',
    desc: 'Designed engaging and responsive landing pages.I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks.'
},

{

    icon:'ri-code-box-line',
    title:' Backend Development',
    desc: 'Hands on experience on IDEs like Eclipse and IntelliJ.Experience of working in the complete Software development life cycle involving development,documentation.'
},

{

    icon:'ri-gallery-line',
    title:' UI / UX',
    desc: 'I am a collaborative and creative front-end developer, experienced in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that provide an optimal user experience.'
}



]

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
            <Col lg="12" className='services_top mb-5'>
                <h6>Features</h6>
                <h2>What Services I Provide</h2>
            </Col>


          {
            servicesData.map((item,index)=>(
            <Col lg="5" md="4" sm="4" key={index} className='mb-4'>

        
            <div className="single_service">
               <span className="service_icon">
              <i class={item.icon}></i>
              </span>
   
              <h2>{item.title}</h2>
            <p>{item.desc}</p>
            </div>
             </Col>
            
            ))
          }

      
       </Row>
      </Container>
    </section>
    
  )
}

export default Services
