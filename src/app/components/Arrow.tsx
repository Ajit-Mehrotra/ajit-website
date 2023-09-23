// components/Arrow.tsx
const Arrow: React.FC = () => {
    return (
      <div className="flex justify-center items-center my-8 py-[2rem]">
        <div className=" animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-10 w-10 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  export default Arrow;
  