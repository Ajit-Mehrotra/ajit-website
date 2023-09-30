// components/HobbiesSection.tsx
import Image from 'next/image';
import React from 'react';

type Hobby = {
    name: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
};

const hobbies: Hobby[] = [
    {
        name: 'Gaming',
        subtitle: 'I will skip class to play',
        description: 'I got 2000+ hours in Rocket League',
        fullDescription: `I play a bunch of games. I've played a lot of games. I currently play Rocket League, Apex Legends, Valorant, CSGO, and Fortnite. But I've played games like Minecraft, GTA, COD, FIFA, etc. before as well. Peak Rank in Rocket League is Champion 3, but in my head, I'm Grand Champion. Current rank is Champion 2. I suck at Valorant & CSGO, but still play it. I hate Fortnite but still play it. I love Apex Legends though. That game is amazing. So much fun to play with friends!  I'll add my real-time rank here soon.`,
        imageUrl: "/ajit.jpg",
    },
    {
        name: 'Carpentry/Woodworking/Blacksmithing',
        subtitle: 'Making stuff makes me happy',
        description: `I'm basically a professional at saying "eh good enough"`,
        fullDescription: `I've made a luxury bathroom, a basement, a deck (foundation-up), two sheds (foundation-up), a gazebo, made a bunch of oak wood slabs using an alaskan mill, a lil S-hook (see picture), and a bunch of other stuff. If I give you something I make, no matter how ass it is, it means you mean a lot to me, and I'm extremely thankful to know you :) If I haven't made anything for you yet. It's probably because I'm still working on it. BE PATIENT JEEZ this stuff takes time`,
        imageUrl: '/ajit.jpg',
    },
    {
        name: 'Traveling',
        subtitle: 'this is a lie',
        description: `it's too much effort fr`,
        fullDescription: `I'd stay in my room all day if I could.`,
        imageUrl: '/ajit.jpg',
    },

    {
        name: 'Cooking',
        subtitle: 'also a lie - so much effort',
        description: 'I am vegetarian. I cook out of desperation',
        fullDescription: `It might be a lot of effort, but apprently, I happen to be good at it (if I strictly follow mom's reciepe). I make a lot of Indian food cause Indians have been vegetarians for thousands of years and have perfected the craft. `,
        imageUrl: '/ajit.jpg',
    },
    // ... add more hobbies as needed
];

const HobbiesSection: React.FC = () => {
    return (
        <div className=" bg-yellow-300 py-[4rem] w-full  " id='hobbies'>
            <h1 className=" text-center font-bold mb-6 text-5xl md:text-6xl lg:text-7xl ">My Hobbies</h1>
            <p className="mt-4 text-center ">The best way to waste time. I&apos;m also learning crocheting. Check out my hobbies below! </p>
            <div className="flex-col space-y-20">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="px-[2rem] md:px-[6rem] lg:px-[10rem]">
                        <h3 className="text-3xl font-semibold p-4 text-center md:text-start">{hobby.name}</h3>
                        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 md:items-start">
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 md:w-1/3">
                                <img src={hobby.imageUrl} alt={hobby.name} className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">{hobby.subtitle}</h3>
                                <p>{hobby.description}</p>
                            </div>
                            <div className="flex-1 ">
                                <p>{hobby.fullDescription}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbiesSection;
