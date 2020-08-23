import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
const WrapperTab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const HeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:last-child {
    width: 15%;
  }
`;
const ColumnItem = styled.span``;

const renderColumn = (itemInfo) => itemInfo.map((item) => (
  <Column key={item.id}>
    <ColumnItem>{item.text}</ColumnItem>
  </Column>
));

const itemInfo = [
  { id: 0, text: 'кол-во дней' },
  { id: 1, text: 'сумма пополнения' },
  { id: 2, text: 'ставка' },
];

export const MenuRows = () => (
  <Wrapper>
    <HeadRow>Минимальные вклады (завист от кол-во дней)</HeadRow>
    <WrapperTab>{renderColumn(itemInfo)}</WrapperTab>
  </Wrapper>
);
