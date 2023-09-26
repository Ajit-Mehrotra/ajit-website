// components/Arrow.tsx
interface ArrowProps {
  color: string;
  padding: string;
  width: number;
  animation?: string;
}

//default was py-[2rem], text-gray-400, 2


const Arrow: React.FC<ArrowProps> = ({ color, padding, width, animation }) => {
  return (
    <div className={`flex justify-center items-center my-8 ${padding}`}>
      <div className={`animate-pulse ${animation}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-10 w-10 ${color}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={`${width}`}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Arrow;
