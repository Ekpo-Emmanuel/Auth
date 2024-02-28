import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

import Home from './pages/Home';
import Signin from './Auth/Signin'
import Signup from './Auth/Signup'
import Dashboard from './pages/dashboard/Dashboard';


import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        setIsFetching(false);
        // ...
      } else {
        // User is signed out
        setUser(null);
        setIsFetching(false);
      }
    });
  }, [])

  
  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/sign-in" element={<Signin user={user} />}/>
        <Route path="/sign-up" element={<Signup user={user}/>}/>
        <Route path="/dashboard" element={<ProtectedRoutes user={user}> 
          <Dashboard />
        </ProtectedRoutes>}/>
      </Routes>
    </Router>
  );
}

export default App;
