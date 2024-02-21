import { Outlet, Link } from "react-router-dom";
const Parent = () => {
    return(
    <>
    <body class="bg-red">
    <nav class="flex mx-10 bg-black">
        <ul class="flex space-x-4 text-white mx-3">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
        <ul>
            <li><Link to="/home">Login</Link></li>
            <li><Link to="/blogs">Logout</Link></li>  
        </ul>
    </nav>
    <Outlet />
    </body>
    </>
    );
};

export default Parent;