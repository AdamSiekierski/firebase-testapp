import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

export const UserContext = React.createContext({ user: null });

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser(userAuth);
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}
