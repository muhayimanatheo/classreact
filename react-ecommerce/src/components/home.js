import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="">
             <nav class="flex bg-black p-5">
                <div className="w-1/2 mx-5">
                    <h1 className="text-white flex">
                        HenduKirwa<svg class="w-6 h-6 text-[#facc15] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
  </svg>
                    </h1>
                </div>
        <ul class="flex space-x-4 text-white ml-auto mx-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/services">About As</Link></li>
        </ul>
    </nav>


        </div>

    );
}

export default Home;