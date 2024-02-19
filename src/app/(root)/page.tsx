import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Home = () => {
  return (
    <div className="h-screen w-full">
      <h1>HOME</h1>
      <UserButton afterSignOutUrl='/sign-in' />
    </div>
  );
};

export default Home;
