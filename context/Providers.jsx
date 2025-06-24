import React from 'react';
import AuthProvider from './AuthProvider';
import UserProvider from './UserProvider';
import ClassProvider from './ClassProvider';

function Providers({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <ClassProvider>{children}</ClassProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default Providers;
