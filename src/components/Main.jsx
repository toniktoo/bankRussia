import React from 'react';
import styled from 'styled-components';

import { CalcMenu } from './calc/CalcMenu';
import { CalcForm } from './calc/CalcForm';
import { CalcInfo } from './calc/CalcInfo';
import { DataLoader } from './calc/DataLoader';

const Wrapper = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  height: 300px;
`;

export const Main = () => (
  <Wrapper>
    <CalcMenu />
    <Content>
      <DataLoader>
        <CalcForm />
        <CalcInfo />
      </DataLoader>
    </Content>
  </Wrapper>
);
