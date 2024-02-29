import React from "react";
//import { Link } from "react-router-dom";
// import { useState } from "react";
function BlogFunc() {
        return (
          
            <div className="BlogFunc">
              <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Title of Blog Post 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis, tortor id consectetur facilisis, est magna dignissim
              est, id consequat velit risus et libero. Integer nec felis
              tincidunt, placerat mi non, ultrices justo.
            </p>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Title of Blog Post 2</h2>
            <p>
              Duis tempus dignissim nunc, eget malesuada lorem sodales non.
              Proin in arcu efficitur, suscipit elit nec, sodales tortor.
              Integer ullamcorper auctor est, vitae posuere libero cursus nec.
            </p>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Title of Blog Post 3</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Nulla facilisi. Nulla facilisi. Sed
              pulvinar nec ipsum id tincidunt. Nulla facilisi.
            </p>
          </div>
        </div>
      </main>      
    </div>
    
            </div>
          );
}

export default BlogFunc;
