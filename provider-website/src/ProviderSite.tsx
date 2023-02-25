import React from 'react';
import styled from 'styled-components';

export const ProviderSite = () => {
  return (
    <StyledProviderSite>
      <header>
        <div>
          <h1>SRH Provider Website</h1>
        </div>
        <nav>
          <span>Services</span>
          <span>Contact</span>
        </nav>
      </header>
    </StyledProviderSite>
  )
}

const StyledProviderSite = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: sans-serif;
  background: #F5F5F5;
  header {
    background: #FFF;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
    nav span {
      font-size: 14px;
      padding: 0 24px;
    }
  }
`;
