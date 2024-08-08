import React from "react";

interface ButtonsProps {
  title: string;
  className?: string;
}

const Buttons: React.FC<ButtonsProps> = ({ title, className }) => {
  return (
    <div>
      <button className={className}>{title}</button>
    </div>
  );
};

export default Buttons;
