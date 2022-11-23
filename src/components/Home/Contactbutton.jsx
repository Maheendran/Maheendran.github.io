import React from 'react'
import'./Home.css'
import { AiFillLinkedin,AiFillGithub,AiOutlineMail } from 'react-icons/ai';
export const Contactbutton = () => {
  return (
    <div className='left_fixed'>
        <a href="https://github.com/Maheendran"><AiFillGithub/></a>
     <a href="https://www.linkedin.com/in/maheendran-kp-aa2b9122b/"><AiFillLinkedin/></a>
     <a href="#"><AiOutlineMail/></a>
     
     
    </div>
  )
}
