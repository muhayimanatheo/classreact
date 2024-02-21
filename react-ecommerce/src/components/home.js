import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
             <nav class="flex mx-10 bg-black">
        <ul class="flex space-x-4 text-white mx-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
    </nav>
        </div>

    );
}

export default Home;