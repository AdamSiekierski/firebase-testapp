import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

export const ThoughtsContext = React.createContext({ thoughts: [], addThought: () => {} });

export function ThoughtsProvider({ children }) {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('thoughts').onSnapshot(({ docs }) => {
      setThoughts(docs);
    });

    return () => unsubscribe();
  }, []);

  const addThought = content => db.collection('thoughts').add({ content });

  return (
    <ThoughtsContext.Provider value={{ thoughts, addThought }}>{children}</ThoughtsContext.Provider>
  );
}

export function withThoughts(Component) {
  return () => (
    <ThoughtsProvider>
      <Component />
    </ThoughtsProvider>
  );
}
