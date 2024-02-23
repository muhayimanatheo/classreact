import React,{useState} from 'react';
import logo from '../images/customer.jpeg';

function Contacts (){
         
    //
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    // Event handler to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // Convert form data to JSON format
        const jsonData = [
            {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                message: formData.message
            }
        ];
        console.log(jsonData); // You can send this data to an API or perform other actions
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
        <div className='flex '>
            <div className="w-1/2 my-15 p-10 ">
                <h1 className="text-white mx-6">Hello!!<br/>Contact us for support we are here for you</h1>
                <div className='w-1/2 bg-[#d1fae5] '>
                    {productData.map((data, index)=>(
                        <div key={index} className=''>
                            <div className=''>
                                <img src={data.photo} alt="" className='w-full p-2' />
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
            <h1 className="text-white mx-6">Hello!!<br />Contact us for support we are here for you</h1>
            <form 
                        onClick={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-span-2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Location</label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                            type="text"
                            name="address"
                            placeholder="Enter your Adress"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Messages</label>
                        <textarea type="text" className=" border rounded w-full py-2 px-3" 
                        placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-[#eab308] text-white font-bold py-2 px-4 rounded-full m"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
            </div>        
    </>
    );
}

export default Contacts;
