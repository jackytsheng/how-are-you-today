import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  bottom: 30px;
  left: 10px;
  position: fixed;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const Btn = styled.div`
  --offset: 10px;
  --border-size: 2px;
  display: block;
  position: relative;
  padding: 1em 1em;
  appearance: none;
  border: 0;
  background: transparent;
  color: #e55743;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: background 0.8s ease;

  &:hover {
    background: rgba(100, 0, 0, 0.03);
  }

  &:hover div:first-child {
    transform: scaleX(0);
  }

  &:hover div:last-child {
    transform: scaleY(0);
  }
`;
const Common = styled.div`
  position: absolute;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    border: inherit;
  }
`;

const Horizontal = styled(Common)`
  --vertical-offset: calc(var(--offset) * -1);
  border-top: var(--border-size) solid currentcolor;
  border-bottom: var(--border-size) solid currentcolor;

  &::before {
    top: calc(var(--vertical-offset) - var(--border-size));
    bottom: calc(var(--vertical-offset) - var(--border-size));
    left: calc(var(--vertical-offset) * -1);
    right: calc(var(--vertical-offset) * -1);
  }
`;

const Veritical = styled(Common)`
  --horizontal-offset: calc(var(--offset) * -1);
  border-left: var(--border-size) solid currentcolor;
  border-right: var(--border-size) solid currentcolor;

  &::before {
    top: calc(var(--horizontal-offset) * -1);
    bottom: calc(var(--horizontal-offset) * -1);
    left: calc(var(--horizontal-offset) - var(--border-size));
    right: calc(var(--horizontal-offset) - var(--border-size));
  }
`;

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Btn onClick={() => navigate('/')}>
        Back to Home
        <Horizontal />
        <Veritical />
      </Btn>
    </Wrapper>
  );
};

export default BackBtn;
