import React from 'react'
import './award.css'

const Award = () => {
  return( 
  <div className="award_container d-flex align-items-center flex-wrap">
    <div className="award_item ">
   <AwardItem 
    year="2023" 
    title="Third Runner Up " 
    text="Participated in technothon and came up with 3rd Runner Up" />
   </div>

   {/* <div className="award_item ">
  <AwardItem 
  year="2022" 
  title="First Rank Holder -" 
  text="A.G Patil Institute Of Solapur" />
    </div>
    <div className="award_item ">
  <AwardItem 
  year="2022" 
  title="First Rank Holder -" 
  text="A.G Patil Institute Of Solapur" />
    </div>
    <div className="award_item ">
  <AwardItem 
  year="2022" 
  title="First Rank Holder -" 
  text="A.G Patil Institute Of Solapur" />
    </div> */}
  
</div>

  )
}

const AwardItem = ({year, title, text})=>{
   return <div className="single_award ">
<div className="award_year">{year}</div>
<h6 className="award_title">
  {title}
   <span>
   {text}
     </span>
</h6>
</div>

}
export default Award
