import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ItemTime = React.memo(({ item }) => {
  const { period_from, summs_and_rate } = item;

  return (
    <Wrapper>
      <Column>
        <ColumnItem>от {period_from} дн.</ColumnItem>
      </Column>
      <Column>
        <ColumnItem>от {summs_and_rate[0].summ_from} р</ColumnItem>
      </Column>
      <Column>
        <ColumnItem>от {summs_and_rate[0].rate}%</ColumnItem>
      </Column>
    </Wrapper>
  );
});
