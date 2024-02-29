import React,{useState,} from 'react';
import logo from '../images/customer.jpeg';
import axios from 'axios'

function Contacts (){
    
    const [dataform, setFormdatanew] = useState([])
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [address, setAddress] = useState([]);
    const [message, setMessage] = useState([]);
    console.log(dataform);
    const handleSubmit = (event) => {
        // Convert form data to JSON format
        event.preventDefault();
       //axios.request
        axios.post("http://127.0.0.1:8000/UserRegisterApi/",{
            "name":username,
            "email":email,
            "phone":phone,
            "address":address,
            "message":message
         })
        .then(function(response) {
             console.log(response);
         })
         .catch(function(error){
            console.log(error);
          });
        const jsonData = [
            {
               fullName:username,
                email: email,
                phone:phone,
                address:address,
                message:message
            }
        ];
        setFormdatanew(jsonData); // You can send this data to an API

        setUsername("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
       
    };
    
    const productData = [
        {
            id: 1,
            name: "Theo",
            title: "CEO",
            description: "Header",
            photo: logo
        },
       
    ]
    return (
        <>
        <div className='flex flex-col md:flex-row'>
  <div className="w-full md:w-1/2 my-5 md:my-15 p-5 md:p-10">
    <h1 className="text-white mx-6">Hello!!<br/>Contact us for support we are here for you</h1>
    <div className='w-full md:w-1/2 bg-[#d1fae5] '>
      {productData.map((data, index)=>(
        <div key={index} className=''>
          <div className=''>
            <img src={data.photo} alt="" className='w-full p-2' />
          </div>
          <h1 className='text-black font-semi-bold mx-8'>{data.name}</h1>
          <h1 className='text-black font-semi-bold mx-8'>{data.title}</h1>
          <p className='text-black font-semi-bold -2xl mx-8'>{data.description}</p>
          <button className='text-white font-semi-bold text-1xl mx-5 bg-[#eab308] p-3 rounded-full md:w-60 mb-4'>For Help!</button>
        </div>
      ))}
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <h1 className="text-white mx-6">Hello!!<br />Contact us for support we are here for you</h1>
    <form onSubmit={(e)=>handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Location</label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={address}
            onChange={(e)=> setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Messages</label>
        <textarea type="text" className="border rounded w-full py-2 px-3" 
          placeholder="Message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
      </div>
      <div className="flex items-center place-content-center">
        <button className="bg-[#eab308] text-white font-bold py-2 px-4 rounded-full" type="submit">Submit</button>
      </div>
    </form>
  </div>
</div>

    </>
    );
}

export default Contacts;
