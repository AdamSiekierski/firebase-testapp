import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

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
  padding: 20px;
  max-width: 800px;
  width: 100%;
  margin: 0 10px;
`;

function Modal({ open }) {
  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    animationDuration: 500,
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Wrapper style={props} key={key}>
          <Window>d00pa</Window>
        </Wrapper>
      )
  );
}

export default Modal;
