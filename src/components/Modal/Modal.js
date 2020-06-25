import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { db } from '../../firebase';

const Wrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Window = styled.div`
  background-color: #fafafa;
  padding: 30px 40px;
  max-width: 800px;
  width: 100%;
  margin: 0 10px;
  color: black;
`;

const Input = styled.input`
  border: none;
  border-bottom: 3px solid crimson;
  padding: 10px;
  outline: none;
  background: none;
  font-size: 1.2em;
  color: black;
  font-weight: bold;
  margin-top: 5px;
`;

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.2em;
  padding: 10px;
  font-weight: bold;
  border-bottom: 3px solid crimson;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease;
  display: block;
  margin-top: 3px;

  &:hover {
    color: white;
    background: crimson;
  }
`;

const H2 = styled.h2`
  color: crimson;
  font-size: 2em;
  margin: 0;
`;

function Modal({ open, close }) {
  const [thought, setThought] = useState('');

  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    animationDuration: 500,
  });

  function onSubmit() {
    db.collection('thoughts')
      .add({ content: thought })
      .then(() => {
        close();
      });
  }

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Wrapper style={props} key={key}>
          <Window>
            <H2>add a new thought.</H2>
            <Input
              type="text"
              placeholder="thought"
              value={thought}
              onChange={e => setThought(e.target.value)}
            />
            <Button onClick={onSubmit}>send</Button>
          </Window>
        </Wrapper>
      )
  );
}

export default Modal;
