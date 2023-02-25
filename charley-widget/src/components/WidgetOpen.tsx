import React from 'react'
import styled from 'styled-components';
import { CharleyRunner } from './CharleyRunner'
import { IconX } from './Icons';

export const WidgetOpen = ({ onClose }) => {
  return (
    <StyledWidgetOpen>
      <header>
        <h1>Ask Charley</h1>
        <div className="icon-close" onClick={onClose}>
          <IconX />
        </div>
      </header>
      <main>
        <CharleyRunner onClose={() => onClose()} />
      </main>
    </StyledWidgetOpen>
  )
}

const StyledWidgetOpen = styled.div`
  background: white;
  display:flex;
  flex-direction: column;
  height: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 2px solid #eee;
    h1 {
      margin: 0;
      font-family: sans-serif;
      font-weight: 700;
    }
    .icon-close {
      height: 20px;
      padding: 2px;
      svg {
        height: 16px;
        width: 16px;
      }
    }
  }
  main {
    padding: 24px;
    flex-grow:1;
  }
`;