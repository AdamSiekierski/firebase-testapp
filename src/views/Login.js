import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { loginWithGoogle } from '../firebase';
import { UserContext } from '../providers/UserContext';

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  color: inherit;
  font-size: 2em;
  padding: 10px;
  font-weight: bold;
  border-bottom: 3px solid white;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: crimson;
    background: white;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  });

  return (
    <Wrapper>
      <Button onClick={() => loginWithGoogle()} type="button">
        zaloguj sie z gugle.
      </Button>
    </Wrapper>
  );
}

export default Login;
