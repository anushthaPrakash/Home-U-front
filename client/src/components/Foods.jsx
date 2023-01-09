import React from 'react'
import FoodCard from './FoodCard';
const foods = [
    {
        name: "Paneer",
        src: "/1.jpg",
        profile: "/dpp.png",
    },
    {
        name: "Chicken",
        src: "/2.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Bhindi",
        src: "/3.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Ghobhi",
        src: "/4.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Kadhi",
        src: "/5.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Bhujia",
        src: "/6.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Egg Curry",
        src: "/7.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Mushroom",
        src: "/8.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Fish",
        src: "/9.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Raita",
        src: "/10.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Biryani",
        src: "/1.jpg",
        profile: "/dpp.png",

    },
];

function Foods() {
    return (

        
            <div className='grid grid-cols-4 gap-4   '>
                {foods.map((food) => (
                    <FoodCard
                        key={food.name}
                        name={food.name}
                        src={food.src}
                        profile={food.profile}
                    />
                ))}
            </div>
        
    )
}

export default Foods;