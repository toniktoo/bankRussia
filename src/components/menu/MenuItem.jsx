import React from 'react';
import styled from 'styled-components';

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

export const MenuItem = React.memo(({ item }) => {
  const { period_from, summs_and_rate } = item;

  const renderColumn = (itemInfo) => itemInfo.map((i) => (
    <Column key={i.id}>
      <ColumnItem>{i.text}</ColumnItem>
    </Column>
  ));
  const itemInfo = [
    { id: 0, text: `от ${period_from} дн.` },
    { id: 1, text: `от ${summs_and_rate[0].summ_from} ₽` },
    { id: 2, text: `от ${summs_and_rate[0].rate}%` },
  ];

  return <Wrapper>{renderColumn(itemInfo)}</Wrapper>;
});
