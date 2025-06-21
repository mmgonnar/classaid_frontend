import React from 'react';
import AuthProvider from './AuthProvider';
import UserProvider from './UserProvider';

function Providers({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

export default Providers;
