import React, { useState } from 'react'
import'./Work.css'
import { BsFillCameraVideoFill ,BsFillEyeFill,BsGithub} from 'react-icons/bs';
import { project } from '../Project';
export const Work = () => {
  const[projectdetail,setProjectdetail]=useState(project)
 
    const handleclick=(e)=>{
      if(e=="all"){
        return setProjectdetail(project)
    
      }
     const Update=project.filter((item)=>{
    return  item.type===e;
    })
     setProjectdetail(Update)
    }    
        return (
    <div>
<div className='work-container' id='work'>
<div>
<span> <h1 className='heading'>My Creative Portfolio Section</h1>
</span>  
</div>
  
<div className='filter_btn'>
<button className='btn' onClick={()=>handleclick("all")}>All</button>
<button className='btn' onClick={()=>handleclick("react")}>React</button>
<button className='btn' onClick={()=>handleclick("javascript")}>JavaScript</button>
<button className='btn'onClick={()=>handleclick("html")}>Html</button>
<button className='btn' onClick={()=>handleclick("css")}>CSS & Animation</button>
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


    </div>
  )
}
