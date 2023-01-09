import React from 'react'
import DishCard from './DishCard';

const dishes = [
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

function BuyDish() {
    return (
        <div className='flex-row justify-center  gap-4  '>
            {dishes.map((dish) => (

                <DishCard
                key={dish.name}
                name={dish.name}
                src={dish.src}
                profile={dish.profile}
                />


    ))}
        </div>
    )
}

export default BuyDish