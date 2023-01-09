import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs"

function Header() {

    const [location, setLocation] = useState(null);
    useEffect(()=>{
        const getLocation = ()=>{
            window.navigator.geolocation.getCurrentPosition((position)=>{
                const { latitude, longitude } = position.coords;
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ac79a44feb304719b7ac2e6437ce6cbc`)
                    .then((response)=>{
                    response.json().then((data)=>{
                        // console.log(data.results[0].formatted)
                        setLocation(data.results[0].formatted)
                    })
                }
                    
            ) // Or do atever you want with the result
            }, console.log)
            
        }

        getLocation();
    }, []);
   

    return (
        <div className='sticky top-0 z-50 bg-[#C5F0A4] flex items-center p-2 lg:px-5 shadow-md '>
            <div className="flex items-center ml-3 " >
                <img src='./logo.png' className='h-10' />

            </div>
            <div className='flex justify-center flex-grow '>
                <div className='flex space-x-6 md:space-x-2'>
                    <div className="flex 
                 items-center rounded-full bg-gray-100 p-2 ">
                        <BsSearch />
                        <input
                            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                            type="text"
                            placeholder="Enter Location" />
                        <div className='border-l-2 border-[#3C6255]  pl-4 pr-4 '><span className='text-gray-500'>{location ? location : "Enter Your Location"}</span></div>
                    </div>

                </div>
            </div>
            <div className='flex items-center sm:space-x-2 justify-end'>
            <p className='font-semibold pr-3 whitespace-nowrap text-[#3C6255]'>{JSON.parse(localStorage.getItem("user"))?.name}</p>
            <img src={JSON.parse(localStorage.getItem("user"))?.profilePic} className='h-10 w-10 rounded-full cursor-pointer' />
            </div>
        </div>
    )
}

export default Header