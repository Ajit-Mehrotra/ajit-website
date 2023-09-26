import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import ExperienceEntry, { ExperienceEntryProps } from './ExperienceEntry'; // Import ExperienceEntry component and its props

const ExperienceList: React.FC<{ experiences: ExperienceEntryProps[] }> = ({ experiences }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const navigate = (offset: number) => {
        if (currentIndex !== null) {
            const newIndex = currentIndex + offset;
            if (newIndex >= 0 && newIndex < experiences.length) {
                setCurrentIndex(newIndex);
            }
        }
    };

    return (
        <div className=''>
            <div className="my-4 ">
                {experiences.map((experience, index) => (
                    <ExperienceEntry
                        key={index}
                        {...experience}
                        experiences={experiences}
                        isExpanded={currentIndex === index}
                        onExpand={() => setCurrentIndex(currentIndex === index ? null : index)} // Toggle the expanded state
                        onNavigate={navigate}
                        isHighlighted={currentIndex !== null && currentIndex !== index}
                        currentIndex={currentIndex} // Pass currentIndex as prop
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}


            </div>
        </div>
    );
};

export default ExperienceList;
