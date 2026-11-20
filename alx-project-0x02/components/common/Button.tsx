import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizes = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ title = 'Click Me', size, shape, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-blue-600 text-white hover:bg-blue-700 ${sizes[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
