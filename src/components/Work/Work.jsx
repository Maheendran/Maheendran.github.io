import React from 'react'
import"./Work.css"
import Zoom from 'react-reveal/Zoom';
import'./Work.css'
import { BsFillCameraVideoFill ,BsFillEyeFill,BsGithub} from 'react-icons/bs';


export const Work = () => {
    const project=[{
        img:"./assets/project/adidas.png",
        name:"adidas",
        discription:"This website is a clone of 'Adidas.com' & here i implemented some functionalities product sorting & filtering,add to cart etc.  ",
        tech:"HTML,CSS,JAVASCRIPT,REACT",
        linked:"",
        fachebook:"https://roaring-hamster-ab9fa6.netlify.app/",
        github:"https://github.com/Maheendran/adidasclone"
        
          },{
            img:"./assets/project/foodbook.png",
            name:"foodbook",
            discription:"This project is about building as online E-commerce food web application showing the functionalities of an e-commerce food,add to cart etc.",
            tech:"HTML,CSS,JAVASCRIPT,REACT",
            linked:"",
            fachebook:"",
            github:"https://github.com/Maheendran/foodbook"
            
              },{
                img:"./assets/project/recipe.png",
                name:"RecipeBook",
                discription:"This project is about building as online  food recipe application showing the functionalities of search,trending etc.",
                tech:"HTML,CSS,JAVASCRIPT,REACT",
                linked:"",
                fachebook:"",
                github:""
                
                  },{
                    img:"./assets/project/netflix.png",
                    name:"Netflix",
                    discription:"This website is a clone of 'NETFLIX' & here i implemented some functionalities, backend integreated with firebase.",
                    tech:"HTML,CSS,JAVASCRIPT,REACT",
                    linked:"",
                    fachebook:"",
                    github:"https://github.com/Maheendran/Netflix"
                    
                      },{
                        img:"./assets/project/music.png",
                        name:"Music Player",
                        discription:"This project is about building as music player application showing the functionalities of start,pause,previous,next etc.",
                        tech:"HTML,CSS,JAVASCRIPT,REACT",
                        linked:"",
                        fachebook:"",
                        github:"https://github.com/Maheendran/musicplayer"
                        
                          },{
                            img:"./assets/project/port.png",
                            name:"Portfolio",
                            discription:"This is my new porfolio which recently made using React,JavaScript and CSS.",
                            tech:"HTML,CSS,JAVASCRIPT,REACT",
                            linked:"",
                            fachebook:"https://elaborate-heliotrope-f21554.netlify.app/",
                            github:"https://github.com/Maheendran/portfolio"
                            
                              },{
                                img:"./assets/project/net.png",
                                name:"Netflix Logo",
                                discription:"This project is about building as 'NETFLIX' logo animation with only CSS.",
                                tech:"HTML,CSS",
                                linked:"",
                                fachebook:"https://bejewelled-sherbet-6ecd6b.netlify.app/",
                                github:""
                                
                                  },{
                                    img:"./assets/project/calc.png",
                                    name:"Calculator",
                                    discription:"This project is about building as calculator  with all functionalities .",
                                    tech:"HTML,CSS,JAVASCRIPT,REACT",
                                    linked:"",
                                    fachebook:"",
                                    github:"https://github.com/Maheendran/Calculator"
                                    
                                      },{
                                        img:"./assets/project/cartoon.png",
                                        name:"cartoon css",
                                        discription:"This project is about building as cartoon character  animation with only CSS.",
                                        tech:"HTML,CSS",
                                        linked:"",
                                        fachebook:"",
                                        github:""
                                        
                                          }
        
        ]
        
  return (
    <div>
        {/* <Zoom> */}
<div className='work-container' id='work'>

<div>

<span> <h1>My Creative Portfolio Section</h1>
</span>
</div>
  

<div className='work-grid'>

{project.map((e)=>(
  
  <div className='work-grid-div'>
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
{/* </Zoom> */}
    </div>
  )
}
