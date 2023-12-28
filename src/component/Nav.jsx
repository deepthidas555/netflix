import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

const [show,setShow]=useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY > 600){
      setShow(true)
    }else{
      setShow(false)
    }
  })
})
// console.log(show);



  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766.png" alt="Netflix" />
    </div>
  )
}

export default Nav