// src/components/SignOut.js
import React from 'react';

const SignOut = ({ setToken }) => {
  const handleSignOut = () => {
    setToken(null);
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
