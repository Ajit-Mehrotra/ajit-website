// components/ExperienceEntry.tsx
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import React from 'react';

interface ExperienceEntryProps {
    role: string;
    company: string;
    timeframe: string;
    briefDescription: string;
    fullDescription: string;
    imageUrl: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
    role,
    company,
    timeframe,
    briefDescription,
    fullDescription,
    imageUrl,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsExpanded(false);
        }
    };

    return (
        <div className="my-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">{role}</h3>
                    <p className="text-gray-600">{company}</p>
                    <p className="text-gray-500">{timeframe}</p>
                </div>
                <button
                    className="text-blue-500 focus:outline-none"
                    onClick={() => setIsExpanded(true)}
                >
                    Expand
                </button>
            </div>
            <p className="mt-2 text-gray-700">{briefDescription}</p>

            {/* Expanded View Modal */}
            <Transition show={isExpanded} as={React.Fragment}>
                <div onClick={closeModal} className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
                        <button
                            className="absolute top-2 right-2 text-black focus:outline-none z-10 block transition-transform duration-300 hover:rotate-180"
                            onClick={() => setIsExpanded(false)}
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
                    </div>
                </div>
            </Transition>
        </div>
    );
};

export default ExperienceEntry;

