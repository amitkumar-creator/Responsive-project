import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Navbar = () =>{
    return(
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                   <a  className="nav-link active"  href="/">Example</a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                   <button><a  className="nav-link active"  href="/">Input-Filter</a></button>
                   </li>
                    <li className="nav-item">
                    <button><a className="nav-link active"  href="/jsondata">Json-Data</a></button>
                    </li>
                </ul>
                    
                </div>
            </div>
            </nav>
         </div>
        </>
    );
}
export default Navbar