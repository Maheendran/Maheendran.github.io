import React, { useState } from 'react'
import"./About.css"
export const About = () => {
  const[state,setSate]=useState(false)

  const handle=()=>{
    console.log("haiiii")
    if(state==true){
      setSate(!state)
    }
    else{
      setSate(!state)
    }
  }
  return (
    <div>
     
     
        <div className= "about-container"  id='about'>
      
<div  className='about-left'>
<h1 >ABOUT ME</h1>
<div className='about-left-inside'>


<ul>
<li> Hello! My name is Maheendran Kp and I enjoy creating things
that live on the internet.</li>
<li> I'm a passionate Developer, with strong administrative and
communication skills, good attention to detail and the ability to write efficient code using MERN Stack.</li>
<li> My interest in web development started back last year when I was trying to edit things on the web, that taught me a lot about HTML & CSS.</li>
<li> As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</li>
<li> Fast Forwarding to today, I built a number of web
applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.</li>
</ul>
</div>
</div>





<div className='about-right'>
<img  className='sky'src="https://pantri.com/static/images/glyphicons/google/svg/bg-cloud.svg" alt="" />

       <img className='tree' src="./assets/R (3).png" alt="" />
       <img className='man' src="./assets/man.png" alt="" />
       <img className='smallrock' src="./assets/smallrock.png" alt="" />
       <img className='grass' src="./assets/R (4).png" alt="" />
       <img className='grass1' src="./assets/R (4).png" alt="" />
      
       <img className='rock' src="./assets/bigrock.png" alt="" />
      
       <div  className='leaves'>
<img src="./assets/leaf01.png" alt="" />
<img src="./assets/leaf02.png" alt="" />
<img src="./assets/leaf03.png" alt="" />

      </div> 
      
      <div className='leaves2'>
 <img src="./assets/leaf01.png" alt="" />
 <img src="./assets/leaf02.png" alt="" />
 <img src="./assets/leaf03.png" alt="" />
 
      </div>
   
  <div className='maneye'>
  <img  src="https://cdn.pixabay.com/photo/2014/04/03/10/01/eye-309608_960_720.png" alt="" />
  </div>
  
</div>

        </div>


    </div>
  )
}
