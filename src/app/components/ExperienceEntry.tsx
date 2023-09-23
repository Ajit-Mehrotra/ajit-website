// components/ExperienceEntry.tsx
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


export interface ExperienceEntryProps {
    role: string;
    company: string;
    timeframe: string;
    briefDescription: string;
    fullDescription: string;
    imageUrl: string;

    isExpanded?: boolean;
    onExpand?: () => void;
    onNavigate?: (offset: number) => void;
    isHighlighted?: boolean;
    experiences?: ExperienceEntryProps[];
    currentIndex?: number | null; // Add currentIndex as prop
    setCurrentIndex?: (index: number | null) => void; // Add setCurrentIndex as prop
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
    role,
    company,
    timeframe,
    briefDescription,
    fullDescription,
    isExpanded = false,
    imageUrl,
    onExpand,
    onNavigate,
    isHighlighted = false,
    experiences,
    currentIndex, // Receive currentIndex as prop
    setCurrentIndex, // Receive setCurrentIndex as prop

}) => {

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && onExpand) {
            onExpand(); // Use onExpand to toggle the expanded state
        }
    };



    return (
        <div className={`my-4 transition-colors duration-300 ease-in-out ${!isHighlighted && isExpanded ? 'bg-yellow-200' : ''}`}>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{role}</h3>
                    <p className="text-gray-600">{company}</p>
                    <p className="text-gray-500">{timeframe}</p>
                </div>
                <button
                    className="text-blue-500 focus:outline-none"
                    onClick={onExpand}
                >
                    Expand
                </button>
            </div>
            <p className="mt-2 text-gray-700">{briefDescription}</p>

            {/* Expanded View Modal */}
            <Transition show={isExpanded} as="div">

                <div onClick={closeModal} className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">


                    <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
                        <button
                            className="absolute top-2 right-2 text-black focus:outline-none z-10 block transition-transform duration-300 hover:rotate-180"
                            onClick={onExpand}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img src={imageUrl} alt={role} className="w-full h-64 object-cover rounded-md" />
                        <h3 className="mt-4 text-lg font-semibold">{role}</h3>
                        <p className="text-gray-600">{company}</p>
                        <p className="text-gray-500">{timeframe}</p>
                        <p className="mt-2 text-gray-700">{fullDescription}</p>


                        <button
                            className="absolute top-2 right-2 text-black focus:outline-none z-20 block transition-transform duration-300 hover:rotate-180"
                            onClick={onExpand}
                        >
                            {/* Close Button SVG */}
                        </button>

                        {/* Left Arrow */}
                        {onNavigate && (
                            <button className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2" onClick={() => onNavigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-10 w-10">
                                    <path fillRule="evenodd" d="M14.707 5.293a1 1 0 00-1.414 0L7 11.586l6.293 6.293a1 1 0 001.414-1.414L9.414 12l5.293-5.293a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}

                        {/* Right Arrow */}
                        {onNavigate && (
                            <button className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2" onClick={() => onNavigate(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-10 w-10">
                                    <path fillRule="evenodd" d="M5.293 14.707a1 1 0 001.414 0L13 8.414l-6.293-6.293a1 1 0 10-1.414 1.414L10.586 8 4.293 14.293a1 1 0 000 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}


                        {experiences && (
                            <div className="w-64 bg-gray-100 p-4 overflow-y-auto fixed left-0 top-1/2 transform -translate-y-1/2 z-10 lg:block hidden">
                                {experiences.map((experience, index) => (
                                    <div
                                        key={index}
                                        className={`p-2 cursor-pointer transition-colors duration-300 ease-in-out ${currentIndex === index ? 'bg-yellow-200 ' : ''}`}
                                    >
                                        {experience.role} at {experience.company}
                                    </div>
                                ))}
                            </div>
                        )}


                    </div>
                </div>
            </Transition>
        </div>
    );
};

export default ExperienceEntry;

