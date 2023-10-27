import React from 'react'
import './education.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Education = () => {
  return <table className='table'>
    <thead className='thead'>
        <tr>
            <th>Degree</th>
            <th> Department</th>
            <th>Institute</th>
            <th>Years</th>
        </tr>
    </thead>
     <tbody>
      <tr>
        <td>B.Tech</td>
        <td>Computer Science Engineering</td>
        <td>S.D. College of Engineering and Technology, Muzaffarnagar</td>
        <td>2018-2022</td>
        </tr>   
        <tr>
        <td>Bhagwanti Saraswati Vidya Mandir Inter College</td>
        <td>Intermmediate</td>
        <td>PCM</td>
        <td>2016-2018</td>
        </tr>     
        <tr>
        <td>Bhagwanti Saraswati Vidya Mandir Inter College</td>
        <td>High School</td>
        <td>Science</td>
        <td>2015-2016</td>
        </tr>       
        </tbody>  
 
  </table>
}

export default Education
