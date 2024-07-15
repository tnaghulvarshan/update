import React from 'react'
import "./index.css";

function Footer() {
  return (
    <div className='footer-full container-fluid text-light'>
<div className='row'>
<div className='col-12 col-md-12 col-lg-6  text-center'>
    <div className='my-4  for-contact ' >
<h1 className='text-center '>For Contact</h1>
<ul className='d-flex flex-column aling-center '>
    <li><h4 > <i className="bi bi-envelope-at mx-2"></i> Email :</h4> <p>tnaghulvarshan@gmail.com</p></li>
    <li><label > <i className="bi bi-telephone-fill mx-2"></i> Mobile No  :</label> <p>+91 9025899267</p></li>
    
</ul>

    </div>
</div>
<div className=' col-12  col-md-12 col-lg-6  text-center'>
<div className='my-4 other-plat'>
<h1>Other Platforms</h1>
<ul className='d-flex flex-column aling-center '>
    <li >
      <a href='https://www.linkedin.com/in/naghul-varshan-t-108ba4303/'> <i className="bi bi-linkedin"></i> <lable className='mx-2'>LinkedIn.</lable><p>Click It!</p></a>
    </li>
</ul>
</div>
</div>
<div className=' col-12  col-md-12 col-lg-6     text-center'>
<div className='my-4'></div>
</div>
</div>
    </div>
  )
}

export default Footer