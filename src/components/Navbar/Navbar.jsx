import React from 'react'
import "./Navbar.css"
import {Link} from'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai';
export const Navbar = () => {
  return (
    <div>
        <div >
    
     <nav>
<input type="checkbox" id='check'  />
<label for="check" className='checkbtn'>
    <AiOutlineMenu/>
</label>
 <label className='logo' >
  <span style={{fontSize:"15px",fontWeight:"600"}}>Ma</span>
  <span  style={{fontSize:"20px",fontWeight:"600"}}>hi</span>
 </label>
       
        <ul>
<Link spy={true}id='home-container'  to='home' smooth={true} activeClass="activeClass"> 
<li>HOME</li> 
</Link>


<Link spy={true}id='about-container'  to='about' smooth={true} activeClass="activeClass"> 
<li>ABOUT</li>
</Link>


<Link spy={true}id='work-container'  to='work' smooth={true} activeClass="activeClass"> <li>WORK</li>
</Link>


<Link spy={true}id='skills-container'  to='skills' smooth={true} activeClass="activeClass">  <li>SKILLS</li>
</Link>

<Link spy={true}id='contact-container'  to='contact' smooth={true} activeClass="activeClass">  <li>CONTACT</li>
</Link>
 </ul>
        </nav>

        </div>
    </div>
  )
}
