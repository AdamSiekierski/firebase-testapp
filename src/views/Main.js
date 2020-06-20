import React, { useContext } from 'react';
import { UserContext } from '../providers/UserContext';

function Main() {
  const { user } = useContext(UserContext);

  return <div>hello, {user.displayName}</div>;
}

export default Main;
