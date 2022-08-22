import React from 'react'

import ScrollToTop from "react-scroll-to-top";
import"./Home.css"
import { Head } from '../Head/Head';
import { About } from '../About/About';
import { Work } from '../Work/Work';
import { Skill } from '../Skill/Skill';
import { Contact } from '../Contact/Contact';
import  {Navbar}  from '../Navbar/Navbar';
export const Home = () => {
 
  return (
    <div className='main'>

<Navbar/>
<ScrollToTop smooth='true' style={{height:"40px",width:"40px",backgroundColor:"orange",borderRadius:"50%",
boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

}} />

<div className='headgap'></div>
<Head/>
<About/>
<div className='dummycontainer' id='about'>

</div>
<Work/>
<Skill/>
<Contact/>

    </div>
  )
}
