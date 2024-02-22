import React from 'react';
import logo from '../images/customer.jpeg';
function Contacts (){
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
        <div className='flex '>
            <div className="w-1/2 my-15 p-10 ">
                <h1 className="text-white mx-6">Hello!!<br/>Contact us for support we are here for you</h1>
                <div className='w-1/2 bg-[#d1fae5] '>
                    {productData.map((data, index)=>(
                        <div key={index} className=''>
                            <div className=''>
                                <img src={data.photo} alt="" className='w-full' />
                                </div>
                                <h1 className='text-black font-semi-bold  mx-8'>{data.name}</h1>
                                <h1 className='text-black font-semi-bold  mx-8'>{data.title}</h1>
                                <p className='text-black font-semi-bold  -2xl mx-8'>{data.description}</p>
                                <button className='text-white font-semi-bold  text-1xl mx-5 bg-[#eab308] p-3 rounded-full w-60 mb-4'>For Help!</button>
                            
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-white mx-6">Hello!!<br/>Contact us for support we are here for you</h1>
                <div className=''>
                     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                          <div class="mb-4">
                             <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">Full Name</label>
                                 <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name"/>
                          </div>
                          <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                    Address
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address"/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
            </div>

            <div class="flex items-center justify-between">
                <button class="bg-[#eab308] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline object-center" type="button">
                    Submit
                </button>
            </div>
                     </form>
                </div>
            </div>
        </div>
        
    </>
    );
}

export default Contacts;
