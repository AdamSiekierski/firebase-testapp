import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { withThoughts, ThoughtsContext } from '../providers/ThoughtsContext';
import Modal from '../components/Modal/Modal';

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

const Add = styled.button`
  background: none;
  border: none;
  outline: none;
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 3;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    left: 0;
    transition: transform 0.3s;
  }

  &::after {
    transform: rotate(90deg);
  }

  ${({ open }) =>
    open &&
    `
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }`}

  visibility: hidden;
`;

function Main() {
  const { thoughts } = useContext(ThoughtsContext);
  const [transition, setTransition] = useState(false);
  const [open, setOpen] = useState(false);
  const thoughtsRef = useRef();
  const titleRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    if (thoughts.length > 0 && !transition) {
      const wrapper = thoughtsRef.current;
      const title = titleRef.current;
      const button = buttonRef.current;

      const tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'Power1.easeInOut' } });

      gsap.set([wrapper, button], { autoAlpha: 0 });
      tl.to(title, { top: 50 });
      tl.to(wrapper, { autoAlpha: 1, duration: 0.5, delay: 0.5 });
      tl.to(button, { autoAlpha: 1, duration: 0.5, delay: 0.5 });

      setTransition(true);
    }
  }, [thoughts.length, transition]);

  return (
    <>
      <Modal open={open} close={() => setOpen(false)} />
      <Add open={open} onClick={() => setOpen(prev => !prev)} ref={buttonRef} />
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
