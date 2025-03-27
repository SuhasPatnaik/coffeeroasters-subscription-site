import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`font-heading bg-primary-accent text-h4 px-8 py-4 rounded-lg self-center cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
