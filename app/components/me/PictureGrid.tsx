// components/PictureGrid.tsx
import React from 'react';

const PictureGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
            <div className="grid grid-cols-2 gap-2">
                <img src="/ashoka1.png" alt="Image 1" className="col-span-2" />
                <img src="/ashoka2.png" alt="Image 2" />
                <img src="/ashoka3.png" alt="Image 3" />
                <img src="/ashoka2.png" alt="Image 2" />
                <img src="/ashoka3.png" alt="Image 3" />
            </div>
            <div className="flex flex-col justify-center p-4">
                <h1 className="text-2xl font-bold mb-2">Title Here</h1>
                <p>Description goes here. This section describes the content next to the grid of images.</p>
            </div>
        </div>
    );
};

export default PictureGrid;
