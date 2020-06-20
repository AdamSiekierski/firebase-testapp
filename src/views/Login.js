import React, { useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import { loginWithGoogle } from '../firebase';
import { UserContext } from '../providers/UserContext';

function Login() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  });

  return (
    <div>
      <button
        onClick={() => {
          loginWithGoogle();
        }}
        type="button"
      >
        zaloguj sie cwelu
      </button>
    </div>
  );
}

export default Login;
