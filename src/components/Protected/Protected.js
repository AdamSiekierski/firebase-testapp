import { useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import { UserContext } from '../../providers/UserContext';

function Protected({ view }) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  });

  return user ? view : null;
}

export default Protected;
