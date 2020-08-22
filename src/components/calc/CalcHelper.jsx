import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  color: rgb(7, 61, 89);
`;

export const CalcHelper = () => (
  <Wrapper>
    <Title>Выберите тип вклада и срок вклада!</Title>
  </Wrapper>
);
