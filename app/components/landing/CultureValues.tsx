// components/CultureValuesSection.tsx
//import { valuesData } from '../data/values';

import Image from "next/image";

// data/values.ts
const valuesData = [
    {
        title: "Care & Compassion",
        description: "A caring person, understanding person, is a good leader and co-worker. There's nobody I'd rather work for or work with.  ",
        imageUrl: "/number-1.png",
        key: 1,
    },
    {
        title: "Trusting Team",
        description: "We succeed together, fail, and learn together. You teach me, I teach you. You grow, I grow.",
        imageUrl: "/number-2.png",
        key: 2,
    },

    {
        title: "Humble People",
        description: "People who are willing to admit when they don't know something, and are willing to learn. Humbleness is a foundation for trust.",
        imageUrl: "/number-3.png",
        key: 3,
    },
    {
        title: "Positivity",
        description: "Positivity makes everyone happy and less stressed in stressful situations. I've become a pretty positive person in recent years, and I'm super proud of my transformation",
        imageUrl: "/number-4.png",
        key: 4,
    },
    {
        title: "Sleep, Water, and Food",
        description: "You'll get my best work when I'm well-rested, hydrated, and fed. I'll do my best to make sure you are too. ",
        imageUrl: "/number-5.png",
        key: 5,
    },
    // ... add more values as needed
];


const CultureValues: React.FC = () => {
    return (
        <div className="mx-[10rem] " id="values">
            <div className="flex flex-col xl:flex-row h-[110vh] overflow-hidden">
                <div className="bg-yellow-300 w-full xl:w-1/2 flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl text-center md:text-6xl font-bold mb-8">What I Value</h1>

                    {valuesData.map((value, index) => (
                        <h1 className="mb-2" key={index}>{index + 1}. {value.title}</h1>
                    ))}

                    <div className="flex items-center pt-8 space-x-4">
                        <p>Here&apos;s how I think!</p>
                        {/* Right arrow for lg screens and larger */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hidden xl:block h-10 w-10 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        {/* Down arrow for smaller screens */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="block xl:hidden h-10 w-10 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                        </svg>

                    </div>
                </div>
                <div className="w-full xl:w-1/2 overflow-y-scroll p-8">
                    {valuesData.map((value, index) => (
                        <div key={index} className="flex items-start mb-8">
                            <img src={value.imageUrl} alt={value.title} className="w-24 h-24 mr-6" />
                            <div>
                                <h2 className="text-xl font-bold mb-4">{value.title}</h2>
                                <p className="mb-4">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}




export default CultureValues;
