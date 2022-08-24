import React, { useState } from 'react'
import'./Work.css'
import { BsFillCameraVideoFill ,BsFillEyeFill,BsGithub} from 'react-icons/bs';
import { project } from '../Project';
import Fade from 'react-reveal/Fade';
export const Work = () => {
  const[projectdetail,setProjectdetail]=useState(project)
    
    const handleclick=(e)=>{
     const Update=project.filter((item)=>{
    return  item.type===e;
    })
     setProjectdetail(Update)
     console.log(projectdetail)
    }    
        return (
    <div>
     <Fade>
<div className='work-container' id='work'>

<div>

<span> <h1 className='heading'>My Creative Portfolio Section</h1>
</span>  
</div>
  
<div className='filter_btn'>
<button onClick={()=>handleclick("react")}>React</button>
<button onClick={()=>handleclick("javascript")}>JavaScript</button>
<button onClick={()=>handleclick("css")}>CSS</button>
</div>
<div className='work-grid'>

{projectdetail.map((e)=>(
  
  <div className='work-grid-div' key={e.name}>
<h3>{e.name}</h3>
   <img src={e.img} alt="" />
   
   <div className='grid-innersection'>
 <br />
<h4>discrption: </h4>{e.discription}
  <br />
<h4>Tech :</h4>{e.tech}
</div>
<div className='work-div-button'>
  <a href={e.linked}>
  <button><BsFillCameraVideoFill size={"1.5rem"}/></button></a>
<a href={e.fachebook}>
  <button><BsFillEyeFill size={"1.5rem"}/></button></a>
  <a href={e.github}>
  <button><BsGithub size={"1.5rem"}/></button></a>
</div>
  </div>
))}
</div>

</div>
</Fade>

    </div>
  )
}
