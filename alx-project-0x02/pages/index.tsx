import Link from 'next/link';
import React from 'react';

const Welcome = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to this page</h1>
      <p className="mt-2 text-gray-600">A small Next.js app to practise components, props, layouts and data fetching.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/home" className="bg-blue-600 text-white px-4 py-2 rounded">Create a post</Link>
        <Link href="/posts" className="border border-blue-600 text-blue-700 px-4 py-2 rounded">Browse posts</Link>
        <Link href="/users" className="border border-blue-600 text-blue-700 px-4 py-2 rounded">Browse users</Link>
      </div>
    </div>
  );
};

export default Welcome;
