import React, {useState} from "react";
//import { Link } from "react-router-dom";
function ServicesFunc() {
     const [color, setColor] = useState('red');
     const [name, setFirstName] = useState('');

  // Function to handle color change
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <p style={{ color: color}}>This Color is going to be changed {color}.</p>
      <button onClick={() => handleColorChange('yellow')}>Change Color</button>
      <p>My Name is {name}</p>
            <label >FullNames:</label><br/>
            <input type="text" value={name} name="name" onChange={e => setFirstName(e.target.value)} className="border-2"/>
    </div>
  );
}
export default ServicesFunc;