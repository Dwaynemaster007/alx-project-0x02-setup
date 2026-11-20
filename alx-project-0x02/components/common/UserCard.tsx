import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <p className="text-xs text-gray-500">User #{id}</p>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-blue-700">{email}</p>
      <p className="text-sm text-gray-600 mt-2">
        {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
