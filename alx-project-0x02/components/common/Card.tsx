import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
