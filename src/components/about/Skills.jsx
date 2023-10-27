import React from 'react'
import './skills.css'
import "bootstrap/dist/css/bootstrap.min.css";


const frontendSkills=[
    {
    title: 'HTML-CSS',
    width: '85%',
    percentage:'85%'
    },
    {
        title: 'React.js',
        width: '85%',
        percentage:'80%'
        },
        {
            title: 'Bootstrap',
            width: '85%',
            percentage:'90%'
            },
            // {
            //     tit',
            //     width: '85%',
            //     percentage:'85%'
            //     }    
]
const backendSkills=[
    {
    title: 'SQL',
    width: '85%',
    percentage:'80%'
    },
    {
        title: 'Core-Java',
        width: '85%',
        percentage:'85%'
        },
        {
          title: 'Spring-boot',
          width: '85%',
          percentage:'80%'
          }
]
const Skills = () => {
  return( 
  <div className="skills_wrapper d-flex gap-5">
  <div className="frontend_skill w-50">
   {
    frontendSkills.map((item,index)=>(
        <SkillItem 
        key={index}
        title={item.title} 
        percentage={item.percentage} />
                  ))
   }
 </div>
  <div className="backend_skill w-50">
  {
      backendSkills.map((item,index)=>(
      <SkillItem 
        key={index}
        title={item.title} 
        percentage={item.percentage} />
      ))
  }
  </div>
  </div>

  )
}

const SkillItem=({title, percentage})=>{
  return  <div className='skill_data mb-3'>
            <div className='skill_title d-flex align-items-center justify-content-between'>
                      <h6>{title}</h6>
                      <span>{percentage}</span>

                </div>
                <div className="skill_bar">
                <span className='skill_bar-percentage' 
                style={{width:`${percentage}`}}></span>

                </div>  
                </div>

}

export default Skills;
