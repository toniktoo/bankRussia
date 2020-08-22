import React from "react";
import styled from "styled-components";

import { ErrorHandler } from "./components/ErrorHandler";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const Wrapper = styled.div`
  width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <ErrorHandler>
        <Main />
      </ErrorHandler>
    </Wrapper>
  );
};

export default App;
