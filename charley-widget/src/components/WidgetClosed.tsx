import React from 'react'
import styled from 'styled-components';
import { IconQuestionMark } from './Icons';

export const WidgetClosed = ({ onOpen }) => {
  return (
    <StyledWidgetClosed onClick={onOpen}>
      <IconQuestionMark />
    </StyledWidgetClosed>
  )
}

const StyledWidgetClosed = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: blue;
  cursor: pointer;
  svg {
    margin: 0;
    path {
      fill: #fff;
    }
  }
`;
