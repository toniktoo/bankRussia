import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import { addSpaceValueDeposit } from '../../helpers';

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
`;
const Item = styled.h2`
  color: rgb(7, 61, 89);
`;

export const CalcInfo = ({ activeDeposit, profit, timeDeposit }) => {
  const { name, param } = activeDeposit;
  const { summs_and_rate: summs_and_rate_MIN } = param[0];
  return (
    <Wrapper>
      <Slide direction="right">
        <Item>{`Тип вклада: ${name}`}</Item>
        <Item>{`Процентная ставка: ${summs_and_rate_MIN[0].rate}%`}</Item>
        <Item>
          {`Доход за ${timeDeposit} дн: ${addSpaceValueDeposit(profit)} `}
          ₽
        </Item>
        <span>
          Расчеты калькулятора являются предварительными. Для расчета дохода
          применяются процентные ставки, действующие на момент проведения
          расчетов
        </span>
      </Slide>
    </Wrapper>
  );
};

// 1000000 * 0.035 / 365 * 10
