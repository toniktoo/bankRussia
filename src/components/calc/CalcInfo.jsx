import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { addSpaceValueDeposit } from '../../helpers';

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 768px) {
  width: 100%;
  }
`;
const Item = styled.h2`
  color: rgb(7, 61, 89);
`;

export const CalcInfo = ({ activeDeposit, profit, timeDeposit }) => {
  const { name, param } = activeDeposit;
  const { summs_and_rate: summs_and_rate_MIN } = param[0];

  const renderItem = (itemInfo) => itemInfo.map((item) => <Item key={item.id}>{item.text}</Item>);
  const itemInfo = [
    { id: 0, text: `Тип вклада: ${name}` },
    { id: 1, text: `Процентная ставка: ${summs_and_rate_MIN[0].rate}%` },
    {
      id: 2,
      text: `Доход за ${timeDeposit} дн: ${addSpaceValueDeposit(profit)} ₽`,
    },
  ];
  return (
    <Wrapper>
      <Slide direction="right">
        {renderItem(itemInfo)}
        <span>
          Расчеты калькулятора являются предварительными. Для расчета дохода
          применяются процентные ставки, действующие на момент проведения
          расчетов
        </span>
      </Slide>
    </Wrapper>
  );
};
