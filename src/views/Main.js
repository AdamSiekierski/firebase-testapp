import React from 'react';
import styled from 'styled-components';
import { withThoughts } from '../providers/ThoughtsContext';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5em;
`;

function Main() {
  return (
    <Wrapper>
      <Title>FireThoughts</Title>
    </Wrapper>
  );
}

export default withThoughts(Main);
