import React from 'react'
import "./index.css" ; 
import { useEffect } from "react";
import Fullstc from "./img/fullstc certi.jpg" ;
import JAVA  from "./img/java certificate.jpg" ;
import  Javacoll from "./img/java collections certificate.jpg" ;
import AOS from 'aos';
import 'aos/dist/aos.css';
function Certificate() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='Certi-all text-light container-fluid'>
      <div className='row  '>
        <h1 className='text-center my-4 '>CERTIFICATIONS.</h1>
        <div className=' col-sm-12 col-md-6 col-lg-6 p-4 text-center container-fluid'>
            <div className='card certi-card my-4 mx-auto  ' data-aos="fade-right">
                  <img src={Fullstc} className='mx-auto'></img>
                  <div class="card-body  text-light">
                    <h4 className='card-title'>JAVA FULL-STACK certificate - GREENS TECHNOLOGY.</h4>
                     <p class="card-text">[2024-FEB] This course equipped me with in-depth knowledge and hands-on experience in both front-end and back-end development.</p>
                  </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 p-4 container-fluid  text-center'>
        <div className='card certi-card my-4  mx-auto ' data-aos="fade-right">
                  <img src={JAVA} className='mx-auto'></img>
                  <div class="card-body  text-light">
                    <h4 className='card-title'>JAVA certificate - GREAT LEARNING.</h4>
                     <p class="card-text">[JULY-2024] I successfully completed a comprehensive Java programming course, gaining expertise in object-oriented programming, data structures, and algorithm design.</p>
                  </div>
            </div>
        </div>
        <div className=' col-sm-12 col-md-6 col-lg-6 p-4  container-fluid  text-center'>
        <div className='card certi-card my-4   mx-auto' data-aos="fade-right">
                  <img src={Javacoll} className='mx-auto'></img>
                  <div class="card-body  text-light">
                    <h4 className='card-title'>COLLECTIONS IN JAVA certificate - GREAT LEARNING.</h4>
                     <p class="card-text">Successfully completed a specialized course on Java Collections, covering core concepts such as List, Set, Map, and Queue interfaces, along with their most common implementations. </p>
                  </div>
            </div>
        </div>
        <div className=' col-sm-12 col-md-6 col-lg-6 p-4  container-fluid text-center'>
          <div className='certi-descrip my-4 border mx-auto card p-3  text-light' data-aos="fade-right">
              
              <h1 className='card-title'> Course Description.</h1>
              <ul className='my-2'>
                <li data-aos="fade-up-right"><h4>JAVA FULL-STACK  </h4> <p>Gained proficiency in Java, Spring Boot, RESTful APIs, HTML, CSS, JavaScript, and popular frameworks like React.js and Bootstrap. Developed hands-on experience through projects.</p></li>
                <li data-aos="fade-up-right"><h4>Collection in JAVA  </h4> <p> This course covered essential concepts such as Lists, Sets, Maps, and Queues, as well as the implementation and performance characteristics of various data structures like ArrayList, LinkedList, HashSet, TreeSet, HashMap, and TreeMap. </p></li>
                <li data-aos="fade-up-right"><h4>JAVA FULL-STACK  </h4> <p>showcasing proficiency in object-oriented programming, data structures, algorithms, and software development principles. Skilled in creating robust applications, debugging, and utilizing frameworks like Spring and Hibernate. Capable of writing efficient, scalable code and collaborating in Agile development environments.</p></li>
              </ul>

          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Certificate