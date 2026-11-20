import React from 'react';
import { GetStaticProps } from 'next';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

interface UsersPageProps {
  users: UserProps[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  let users: UserProps[] = [];
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (res.ok) users = await res.json();
  } catch (error) {
    console.error('Could not fetch users:', error);
  }
  return { props: { users }, revalidate: 3600 };
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      {users.length === 0 && <p className="text-gray-600">No users to show right now. Please try again later.</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} address={user.address} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
