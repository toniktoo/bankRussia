import React from 'react';
import styled from 'styled-components';

import { ErrorHandler } from './components/ErrorHandler';
import { Header } from './components/Header';
import { Main } from './components/Main';

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
  max-width: 768px;
  width: 100%;
  }
`;

export const App = () => (
  <Wrapper>
    <Header />
    <ErrorHandler>
      <Main />
    </ErrorHandler>
  </Wrapper>
);
