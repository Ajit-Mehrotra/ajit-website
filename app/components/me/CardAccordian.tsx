// components/HobbiesSection.tsx
import Image from 'next/image';
import { type } from 'os';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';




export interface AccordianObj {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

interface CardAccordianProps {
    items: AccordianObj[];
    idName: string;
    className: string;
    sectionTitle: string;
}

const CardAccordian: React.FC<CardAccordianProps> = ({ items, sectionTitle, idName, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleGamesList = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className={`w-full duration-300 p-4 ${className}`} id={idName} onClick={toggleGamesList}>
            <h1
                className='text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center p-4 '

            >
                {sectionTitle}
            </h1>
            <Collapse isOpened={isExpanded}>
                <div className="flex flex-wrap justify-around gap-8" >
                    {items.map((item, index) => (
                        <div className="flex flex-wrap justify-center items-center " key={index} >
                            <div className="card rounded-lg overflow-hidden shadow-lg bg-white p-4 ">
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <img src={item.imageUrl} alt={item.title} className="w-full h-48 rounded-lg object-cover mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

export default CardAccordian;






