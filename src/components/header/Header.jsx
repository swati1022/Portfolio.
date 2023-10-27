import React, {useRef} from 'react'
import  {Container} from 'reactstrap';
 import './header.css'

import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
const navLinks=[
    {
    display:'Home',
    url:'#home'
},
{
    display:'About',
    url:'#about'
},
{
    display:'Services',
    url:'#services'
},
{
    display:'Experience',
    url:'#experiance'
},
{
    display:'Contact',
    url:'#contact'
},



]
 const Header = () => {
  
    const menuRef=useRef(null)

      const menuToggle=()=>{ menuRef.current.classList.toggle('menu_active')}

     const handleClick = (e)=>{
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location= document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top:location-70,
        })
     
 }
  return (<header className="header" >
     <Container>
        <div className='navigation d-flex align-items-center justify-content-between'>
            <div className='logo'><h5>Swati Kushwaha</h5></div>
            <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
            <ul className='nav_list'>

                {
                    navLinks.map((item,index)=>
                    (<li className='nav_item' key={index}> 
                    <a href={item.url} onClick={handleClick}>{item.display}</a>                
                </li>
                    ))
                }
                
            </ul>
        </div>
<div className="nav_right d-flex align-items-center gap-4">
    <button className="btn">Let's Talk</button>
    </div>
    <span className="mobile_menu">
        <i class="ri-menu-5-line" onClick={menuToggle}></i></span>

        </div>
       
     </Container> 
  </header>
  )
}

export default Header
