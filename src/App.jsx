import React from 'react';
import styled from 'styled-components';

import { ErrorHandler } from './components/ErrorHandler';
import { Header } from './components/Header';
import { Main } from './components/Main';

const Wrapper = styled.div`
  width: 900px;
  padding: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const App = () => (
  <Wrapper>
    <Header />
    <ErrorHandler>
      <Main />
    </ErrorHandler>
  </Wrapper>
);
