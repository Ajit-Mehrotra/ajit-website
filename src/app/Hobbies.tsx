// components/HobbiesSection.tsx
import React from 'react';

type Hobby = {
    name: string;
    description: string;
    imageUrl: string;
};

const hobbies: Hobby[] = [
    {
        name: 'Photography',
        description: 'Capturing moments and creating memories.',
        imageUrl: 'ajit.jpg',
    },
    {
        name: 'Traveling',
        description: 'Exploring new places and experiencing diverse cultures.',
        imageUrl: 'ajit.jpg',
    },
    {
        name: 'Photography',
        description: 'Capturing moments and creating memories.',
        imageUrl: 'ajit.jpg',
    },
    {
        name: 'Traveling',
        description: 'Exploring new places and experiencing diverse cultures.',
        imageUrl: 'ajit.jpg',
    },
    {
        name: 'Photography',
        description: 'Capturing moments and creating memories.',
        imageUrl: 'ajit.jpg',
    },
    // ... add more hobbies as needed
];

const HobbiesSection: React.FC = () => {
    return (
        <div className=" bg-yellow-300 py-[4rem] w-full  ">
            <h1 className=" text-center font-bold mb-6 text-5xl md:text-6xl lg:text-7xl ">My Hobbies</h1>
            <p className="mt-4 text-center ">I am the one don't weigh </p>
            <div className="flex-col space-y-20">
                {hobbies.map((hobby, index) => (
                    <div key={index} className=' px-[2rem] md:px-[6rem] lg:px-[10rem]'>
                        <h3 className="text-3xl font-semibold p-4 text-center md:text-start">{hobby.name}</h3>
                        <div className='flex flex-wrap flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 md:items-start'>
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 md:w-1/3">
                                <img src={hobby.imageUrl} alt={hobby.name} className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">{hobby.name}</h3>
                                <p>{hobby.description}</p>
                            </div>
                            <div className="flex-1 ">
                                <p>Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbiesSection;
