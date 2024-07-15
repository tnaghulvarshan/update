import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar from "./components/navbar/index";
import Home from "./components/home/index";
import Education from "./components/education/index";
import Certificate from "./components/certifications/index";

import Footer from "./components/footer/index";
import "./App.css" ;
function App() {
  return (
  <Router className="app border Dom position-relative container-fluid">  
   
        <Navbar></Navbar>
<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/certificate" element={<Certificate/>} ></Route>
  <Route path="/education" element={<Education/>} ></Route>

</Routes>
  <Footer></Footer>    
   <div className="position-fixed side-nav  ">
  <ul  className="mx-2">
    <li className="my-2 text-light nav-item  "><Link className="nav-content " to="/" element={<Home></Home>} >Home</Link></li>
   
    <li className="my-2 text-light "> <Link className="nav-content " to='/education' element={<Education></Education>} >Eduction</Link>  </li>
    <li className="my-2 text-light "> <Link className="nav-content " to='/Certificate' element={<Certificate></Certificate>}>Certifications</Link>  </li>
  </ul>
   </div>
     </Router>
  );
}

export default App;
