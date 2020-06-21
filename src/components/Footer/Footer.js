import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserContext';
import { auth } from '../../firebase';

const Wrapper = styled.div`
  width: 100%;
  padding: 4px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #111111;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  appearance: none;
`;

function Footer() {
  const { user } = useContext(UserContext);

  return (
    <Wrapper>
      <div>{user ? `zalogowany jako ${user.displayName}` : 'nie zalogowany'}</div>
      {user && (
        <div>
          <Button type="button" onClick={() => auth.signOut()}>
            wyloguj sie
          </Button>
        </div>
      )}
    </Wrapper>
  );
}

export default Footer;
