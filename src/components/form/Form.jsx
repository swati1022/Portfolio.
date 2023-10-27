import React, {useState, useRef} from 'react'
import "./form.css"
import { Container } from 'reactstrap';


const Form = () => {
    // const [id, setEnteredId]=useState('') 
const [name, setEnteredName]=useState('')
const fname=useRef("");
const [email, setEnteredEmail]=useState('')
const femail=useRef("");
const [msg, setEnteredMessage]=useState('')
const fmsg=useRef("");


   const save=(e)=>
   {
    e.preventDefault()
   
    const user={name,email,msg}
    console.log(user)
    fetch("http://localhost:8085/submit/save",{
    method:"POST",
    headers:{"Content-Type" : "application/json"},
    body:JSON.stringify(user)

   }).then(()=>{
    console.log("new user added");
    alert("New data saved successfully")
    fname.current.value="";
    femail.current.value="";
    fmsg.current.value="";
    
   })
   }
  return (
    <Container>
    <form className='form'>
{/* 
          <div className="form_input">
            <input type="text" placeholder='Your Id' hidden  
            value={name} onChange={(e)=> 
                setEnteredId(e.target.value)} />
        </div> */}
        <div className="form_input" >
            <input type="text" placeholder='Your Name' 
            ref={fname}
            value={name} onChange={(e)=> 
                setEnteredName(e.target.value)} />
        </div>
        <div className="form_input">
            <input type="email" placeholder='Your Email' 
             ref={femail}
            value={email} onChange={(e)=> 
                setEnteredEmail(e.target.value)} />
        </div>
        <div className="form_input">
     <textarea  placeholder='Write Message'
             ref={fmsg}
             value={msg} 
            onChange={(e)=> 
                setEnteredMessage(e.target.value)}></textarea>
        </div>
        <button className="submit_btn" onClick={save} >
            Submit
        </button>
    </form>
    {name}
    {email}
    {msg}
    </Container>
  )
}

export default Form


