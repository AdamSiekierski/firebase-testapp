import React, { useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import { UserContext } from '../../providers/UserContext';

function Protected({ view }) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  });

  return <div>{user && view}</div>;
}

export default Protected;
