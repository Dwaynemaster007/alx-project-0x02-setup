import Button from '@/components/common/Button';
import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-4 text-gray-600">The reusable Button component in its three sizes and shapes:</p>
      <div className="flex flex-wrap items-center gap-4">
        <Button title="Small" size="small" shape="rounded-sm" />
        <Button title="Medium" size="medium" shape="rounded-md" />
        <Button title="Large" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;
