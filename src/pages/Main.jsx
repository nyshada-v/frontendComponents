import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useNavigate} from 'react-router-dom';
import Login from './Login'; 
import Signup from './Signup'; 
import { auth } from '../firebase/config'; 
import { signOut, onAuthStateChanged } from 'firebase/auth';


function MainPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser && window.location.pathname === '/main') {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Welcome to HopeForward Main Page!</h2>
        {user ? (
          <>
            {/* <p>You are logged in as: **{user.email || user.displayName}**</p> */}
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>Loading user data or not logged in...</p>
        )}
      </div>
    </div>
  );
}


export default MainPage;