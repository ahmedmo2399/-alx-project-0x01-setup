import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  // Dummy users data
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded mb-4">
              <h2 className="font-semibold">{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
