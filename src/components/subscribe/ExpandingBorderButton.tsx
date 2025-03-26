import { useState, MouseEvent, ReactNode } from "react";

interface ExpandingBorderButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const ExpandingBorderButton = ({
  onClick,
  children,
}: ExpandingBorderButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative w-full pb-2 cursor-pointer flex items-center justify-between group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent">
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 h-full bg-primary-accent transition-all duration-400 ease-out ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ExpandingBorderButton;
