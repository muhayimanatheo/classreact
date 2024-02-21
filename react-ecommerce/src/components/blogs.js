import React from "react";
//import { Link } from "react-router-dom";
import { useState } from "react";
function BlogFunc() {
    const datas= [{
        id: 1,
        name: "Theo",
        title: "CEO",
        description: "This is a blog 1",
    },
    {
        id: 2,
        name: "Jane",
        title: "Managing DIrector",
        description: "This is a blog 2",
    }
        ];
        const [data, setData] = useState(datas);
        
        const updateState = (index) =>(e) =>{
            const newArray = data.map((item,i) =>{
                if(index=== i){
                    return {...item,[e.target.name]: e.target.value};
                }
                else{
                        return item;
                    }
            });
            setData(newArray);
        };
        return (
            <div className="BlogFunc">
              <p>Hello, world!</p>
              <ul>
                {data.map((datum, index) => {
                  return (
                    <li key={datum.name}>
                      <input
                        type="text"
                        name="name"
                        value={datum.name}
                        onChange={(event) => updateState(index, event.target.value)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
}

export default BlogFunc;
