import React from "react";
import styled from "styled-components";

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

export const HeaderTime = () => {
  return (
    <Wrapper>
      <HeadRow>Минимальные вклады (завист от кол-во дней)</HeadRow>
      <WrapperTab>
        <Column>
          <ColumnItem>кол-во дней</ColumnItem>
        </Column>
        <Column>
          <ColumnItem>сумма пополнения</ColumnItem>
        </Column>
        <Column>
          <ColumnItem>ставка</ColumnItem>
        </Column>
      </WrapperTab>
    </Wrapper>
  );
};
