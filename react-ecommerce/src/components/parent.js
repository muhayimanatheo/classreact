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
                <li><Link to="/blogs">Shop</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
    </nav>
    <Outlet/>
        </div>
     </>
    );
 }

 export default Parents;
