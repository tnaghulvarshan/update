import React from 'react'
import { useEffect } from "react";
import "./index.css" ;
import Jaya from './img/jayaschool_KP.jpg';
import clg from './img/saveetha-engineering-college-chennai_1646737426.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Eduction() {
    useEffect(() => {
        AOS.init();
      }, [])
  return ( 
    <div className='Edu-full container-fluid'>
        <div className='row text-light  '>
            <div className='col-12 text-center my-4 '>
                <h1>Education</h1>
                </div>
            <div className='col-12 col-md-8 col-lg-6 text-center  my-4'>
              <div className='card w-75 mx-auto Schl-card border-0 my-3 position-relative'data-aos="fade-right"  >
              <img src={Jaya} className='schl-img ' alt="Jaya School" />
              <div className='position-absolute top-0 text-center w-100 schooling'data-aos="fade-down" > <h1>Schooling</h1></div>
              <div className='Card-body bg-dark text-light p-3'>
                <h5 className='card-title'> 2020-2021 | JAYA HIGHER SECONDARY SCHOOL. </h5>
                <p class="card-text">I completed my schooling with a focus on Computer Science, which fueled my passion for technology. During this time, I gained a solid foundation in programming, algorithms, and data structures. These formative years ignited my curiosity and determination to explore the vast world of software development, setting the stage for my future endeavors in the tech industry.</p>
              </div>
              </div> 
            </div>
            <div className='col-12 col-md-8 col-lg-6 text-center  my-4'>
            <div className='card w-75 mx-auto Schl-card border-0 my-3 position-relative' data-aos="fade-right"  >
              <img src={clg} className='schl-img' alt="Jaya School" />
              <div className='position-absolute top-0 text-center w-100 schooling' data-aos="fade-down" > <h1>University.</h1></div>
              <div className='Card-body bg-dark text-light p-3'>
                <h5 className='card-title'> 2021-2024 | SAVEETHA COLLEGE OF LIBERAL ARTS AND SCIENCES.</h5>
                <p class="card-text">I completed my schooling with a focus on Computer Science, which fueled my passion for technology. During this time, I gained a solid foundation in programming, algorithms, and data structures. These formative years ignited my curiosity and determination to explore the vast world of software development, setting the stage for my future endeavors in the tech industry.</p>
              </div>
              </div> 
            </div>
        </div>
    <div className='Skill text-center'>
        <h1 className='my-4   mx-auto skill-head' data-aos="zoom-in-up"> SkillSet</h1>
    <div className='Skill-list row text-center  text-light'>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className=' skillh2 my-4'>HTML5</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className='skillh2 my-4'>CSS</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className=' skillh2 my-4'>BOOTSTARP</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className='skillh2 my-4'>REACT.JS</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className=' skillh2 my-4'>SPRING BOOT</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className='skillh2 my-4'>JAVA</h2></div>
                <div className='col-lg-3 col-md-4'> <h2  data-aos="fade-down-right" className=' skillh2 my-4'>MY SQL</h2></div>
    </div>

    </div>

    </div>
  )
}

export default Eduction