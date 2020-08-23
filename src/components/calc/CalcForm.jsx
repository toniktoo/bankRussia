import React from 'react';
import styled from 'styled-components';
import { InputNumber } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { useDispatch } from 'react-redux';
import {
  setInitValueDeposit,
  changeValueDeposit,
  changeTimeDeposit,
} from '../../redux/actions/calc';
import { addSpaceValueDeposit } from '../../helpers';

const Wrapper = styled.div`
  width: 55%;
  margin-right: 5%;
  @media (max-width: 768px) {
  width: 100%;
  margin: 0 0 16px 0;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleItem = styled.h2`
  color: rgb(7, 61, 89);
  margin: 0;
`;

const renderDepositPeriod = (start, end) => {
  if (start === end - 1) {
    return `Вклад открывается на ${start} дн.`;
  }
  if (end === Infinity) {
    return `Вклад открывается от ${start} дн.`;
  }
  return `Вклад открывается от ${start} до ${end - 1} дн.`;
};

const renderMinValueDeposit = (value) => `Мин сумма вклада ${addSpaceValueDeposit(value)} ₽.`;

export const CalcForm = React.memo(
  ({ activeDeposit, valueDeposit, timeDeposit }) => {
    const dispatch = useDispatch();
    const { param, name } = activeDeposit;
    const {
      summs_and_rate: summs_and_rate_MIN,
      period_from: period_from_MIN,
    } = param[0];
    const { period_from: period_from_MAX } = param[1];

    React.useEffect(() => {
      dispatch(
        setInitValueDeposit({
          valueDeposit: summs_and_rate_MIN[0].summ_from,
          timeDeposit: period_from_MIN,
          rate: summs_and_rate_MIN[0].rate,
          typeDeposit: name,
        }),
      );
    }, [dispatch]);

    const onChangeValueDeposit = (value) => {
      dispatch(
        changeValueDeposit({
          valueDeposit: value,
          rate: summs_and_rate_MIN[0].rate,
          typeDeposit: name,
        }),
      );
    };
    const onChangeValueTime = (value) => {
      dispatch(
        changeTimeDeposit({
          timeDeposit: value,
          rate: summs_and_rate_MIN[0].rate,
          typeDeposit: name,
        }),
      );
    };

    return (
      <Wrapper>
        <Slide direction="left">
          <Item>
            <ItemRow>
              <TitleItem>Сумма вклада в рублях:</TitleItem>
              <InputNumber
                min={summs_and_rate_MIN[0].summ_from}
                style={{ margin: '0 16px' }}
                value={valueDeposit}
                onChange={onChangeValueDeposit}
              />
            </ItemRow>
            <span>
              {renderMinValueDeposit(summs_and_rate_MIN[0].summ_from)}
            </span>
          </Item>
          <Item>
            <ItemRow>
              <TitleItem>Срок вклада в днях:</TitleItem>
              <InputNumber
                min={period_from_MIN}
                max={period_from_MAX - 1}
                style={{ margin: '0 16px' }}
                value={timeDeposit}
                onChange={onChangeValueTime}
              />
            </ItemRow>
            <span>{renderDepositPeriod(period_from_MIN, period_from_MAX)}</span>
          </Item>
        </Slide>
      </Wrapper>
    );
  },
);
