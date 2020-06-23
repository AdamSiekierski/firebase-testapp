import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

export const ThoughtsContext = React.createContext({ thoughts: [], addThought: () => {} });

export function ThoughtsProvider({ children }) {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('thoughts').onSnapshot(({ docs }) => {
      const newThoughts = [];
      docs.map(doc => {
        newThoughts.push(doc.data().content);
      });
      setThoughts(newThoughts);
    });

    return () => unsubscribe();
  }, []);

  const addThought = thought => setThoughts(prevThoughts => [...prevThoughts, thought]);

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
