import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { withThoughts, ThoughtsContext } from '../providers/ThoughtsContext';

const Thoughts = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0 0;
  visibility: hidden;
`;

const Title = styled.h1`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  margin: 0;
`;

function Main() {
  const { thoughts } = useContext(ThoughtsContext);
  const [transition, setTransition] = useState(false);
  const thoughtsRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (thoughts.length > 0 && !transition) {
      const wrapper = thoughtsRef.current;
      const title = titleRef.current;

      const tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'Power1.easeInOut' } });

      gsap.set(wrapper, { autoAlpha: 0 });
      tl.to(title, { top: 50 });
      tl.to(wrapper, { autoAlpha: 1, duration: 0.5, delay: 0.5 });

      setTransition(true);
    }
  });

  return (
    <>
      <Title ref={titleRef}>FireThoughts</Title>
      <Thoughts ref={thoughtsRef}>
        {thoughts.map(thought => {
          return (
            <div key={thought.id}>
              <h2>{thought.data().content}</h2>
            </div>
          );
        })}
      </Thoughts>
    </>
  );
}

export default withThoughts(Main);
