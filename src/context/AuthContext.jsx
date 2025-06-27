import { createContext, useEffect, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// This AuthProvider is used to wrap the app
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // 🔧 Simulate a fake logged-in user (for development only)
  useEffect(() => {
    // This dummy user helps test the UI before Firebase is connected
    const dummyUser = {
      uid: 'dev-user-id',
      email: 'dev@example.com',
      displayName: 'Dev User',
    };

    // Simulate async loading like Firebase does
    const timeout = setTimeout(() => {
      setCurrentUser(dummyUser);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
