import React from 'react';
import { Router } from '@reach/router';

import Login from '../../views/Login';
import Protected from '../Protected/Protected';
import Main from '../../views/Main';
import { UserProvider } from '../../providers/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Protected path="/" view={<Main />} />
        <Login path="/login" />
      </Router>
    </UserProvider>
  );
}

export default App;
