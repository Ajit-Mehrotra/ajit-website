// components/Project.tsx
import { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        className="text-left w-full text-lg font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          {description}
        </div>
      )}
    </div>
  );
};

export default Project;
