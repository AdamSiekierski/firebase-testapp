import React, { useState } from 'react';

export const ThoughtsContext = React.createContext({ thoughts: [], addThought: () => {} });

export function ThoughtsProvider({ children }) {
  const [thoughts, setThoughts] = useState([]);

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
