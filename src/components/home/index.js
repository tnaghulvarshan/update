import React from 'react';
import "./index.css";
import {useEffect} from "react";
import Me from "./img/file.png";
import Resume from "./img/naghulvarsha_res_update.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=' bg-black container-fluid  home-full '>
<div className='row g-4 text-center'>
  <div className=' col-8 col-sm-8 col-md-8 col-lg-6  my-4 container-fluid'>
<div data-aos="zoom-out-right" className=' wel-content my-4 p-4 border' >
    <h1 className='text-light '>Welcome to My Portfolio</h1>
    <p className='text-light '>Hello! I'm<b>Naghul Varshan</b> ,I have recently completed a <b>Bachelor of Science, majoring in Computer Science</b>  and Software Systems at the University of SIMATS, And a passionate and dedicated <b>JAVA full-stack developer</b>  with a recently earned certificate from a comprehensive course completed in Febrauary 2024. My journey in the tech world has been driven by a curiosity to understand how things work and a desire to build innovative solutions that make a difference.</p>
   <p className='text-light '>In this portfolio, you'll find a collection of projects that showcase my abilities, creativity, and dedication to quality. Each project reflects my approach to solving problems and my drive to deliver user-friendly, functional applications.</p>
    </div>

    </div>
  <div className='col-12 col-sm-8 col-md-8 col-lg-6  phto-content '>
   <div className='me'>
    <img data-aos="zoom-out-left" src={Me }className=' m-4' ></img>
   </div>
    </div>
    
</div>

<div className='resume'>
<div class="accordion w-50 mx-auto" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h1>For Resume</h1> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <img src={Resume} className='w-100'></img>
<a className='btn btn-success mx-auto' href='naghulvarsha_res_update.pdf' download="Naghul_resume.pdf "> Download</a>
      </div>
    </div>
  </div>
  </div>
</div>
    </div>
  )
}

export default Home