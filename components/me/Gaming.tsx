// components/HobbiesSection.tsx
import Image from 'next/image';
import React from 'react';

type Game = {
    name: string;
    hours: string;
    peakRank: string;
    imageUrl: string;
};

const games: Game[] = [
    {
        name: 'Rocket League',
        hours: '2000+',
        peakRank: `Champion 3`,
        imageUrl: "/rocket-league.jpeg",
    },
    {
        name: 'Apex Legends',
        hours: '500+',
        peakRank: `Diamond`,
        imageUrl: "/apex.jpg",
    },
    {
        name: 'CSGO',
        hours: '500+',
        peakRank: `Gold Nova`,
        imageUrl: "/csgo.jpg",
    },
    {
        name: 'Fortnite',
        hours: '1000+',
        peakRank: `John Wick`,
        imageUrl: "/fortnite.jpg",
    },
    {
        name: 'Valorant',
        hours: '200+',
        peakRank: `Silver`,
        imageUrl: "/valorant.jpg",
    },


    // ... add more hobbies as needed
];



const HobbiesSection: React.FC = () => {
    return (
        <div className="w-full hover:bg-stone-900 duration-300 p-4 pb-20" id='gaming'>
            <h1 id='gaming-text' className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center p-4  duration-300'>GAMING</h1>
            <div className="flex flex-wrap justify-around gap-8">
                {games.map((game, index) => (
                    <div className="flex flex-wrap justify-center items-center " key={index} >
                        <div className="card rounded-lg overflow-hidden shadow-lg bg-white p-4 ">
                            <h3 className="text-2xl font-semibold mb-2">{game.name}</h3>
                            <img src={game.imageUrl} alt={game.name} className="w-full h-48 rounded-lg object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{game.hours} hours</h3>
                            <p>Peak Rank: {game.peakRank}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbiesSection;
