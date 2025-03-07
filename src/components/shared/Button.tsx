import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}

export default function Button({
  children,
  handleClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`font-heading bg-primary-accent text-h4 px-8 py-4 rounded-lg self-center cursor-pointer ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
