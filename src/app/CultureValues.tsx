// components/CultureValuesSection.tsx
//import { valuesData } from '../data/values';

// data/values.ts
const valuesData = [
    {
        title: "Integrity",
        description: "Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    },
    {
        title: "Integrity",
        description: "Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "/path/to/integrity.svg",
    },
    {
        title: "Integrity",
        description: "Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "/path/to/integrity.svg",
    },
    {
        title: "Integrity",
        description: "Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "/path/to/integrity.svg",
    },
    {
        title: "Integrity",
        description: "Acting with honesty and honor without compromising the truth. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "/path/to/integrity.svg",
    },
    // ... add more values as needed
];


const CultureValues: React.FC = () => {
    return (
        <div className="mx-[10rem] mb-[10rem]">
            <h1 className=" text-center font-bold mb-[4rem] text-5xl md:text-6xl lg:text-7xl">My Culture & Values</h1>
            <div className="flex flex-col xl:flex-row h-[150vh] overflow-hidden">
                <div className="bg-yellow-300 w-full xl:w-1/2 flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl text-center md:text-6xl font-bold mb-8">What I Value</h1>

                    {valuesData.map((value, index) => (
                        <h1 className="mb-2">{index + 1}. {value.title}</h1>
                    ))}

                    <div className="flex items-center pt-8 space-x-4">
                        <p>Here's how I think!</p>
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
