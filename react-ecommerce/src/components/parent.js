import React from 'react';
import {Outlet, Link} from 'react-router-dom';


 const Parents = () => {

    return (
        <>
        <div className="">
             <nav className="flex bg-black p-5">
                <div className="w-1/2 mx-5">
                    <h1 className="text-white flex">
                        HenduKirwa
                    </h1>
                </div>
            <ul className="flex space-x-4 text-white ml-auto mx-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
    </nav>
    <Outlet/>

    <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Blog. All Rights Reserved.</p>
        </div>
      </footer>
        </div>
     </>
    );
 }

 export default Parents;
