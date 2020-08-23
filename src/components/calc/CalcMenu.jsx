import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown, Tooltip } from 'antd';
import {
  actionSetInitDepositData,
  actionSetActiveTypeDeposit,
  actionSetActiveDeposit,
} from '../../redux/actions/data';

import dbCalc from '../../assets/depcalc.json';
import { MenuItem } from '../menu/MenuItem';
import { MenuRows } from '../menu/MenuRows';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 50px;
  color: rgb(7, 61, 89);
`;
const Calculator = styled.div`
  width: 100%;
  height: 40px;
  
  @media (max-width: 768px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  }
`;
const Title = styled.h1`
  color: rgb(7, 61, 89);
`;
const DropdownBtn = styled.button`
  width: 50%;
  background-color: #e42845;
  border: none;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
  
  @media (max-width: 768px) {
   width: 100%;
  }
`;
const DropdownBtnLeft = styled(DropdownBtn)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  
  @media (max-width: 768px) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }
`;
const DropdownBtnRight = styled(DropdownBtn)`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  
  @media (max-width: 768px) {
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  }
`;

export const CalcMenu = () => {
  const { deposits, activeCodeDeposit } = useSelector(
    (state) => state.reducerData,
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actionSetInitDepositData({ deposits: dbCalc.deposits }));
  }, [dispatch]);

  const setActiveTypeDeposit = (code) => dispatch(actionSetActiveTypeDeposit(code));

  const menuTypesDeposit = () => (
    <Menu>
      {deposits.map((item) => (
        <Menu.Item
          key={item.name}
          onClick={() => {
            setActiveTypeDeposit(item.code);
          }}
        >
          <Tooltip
            placement="right"
            title="Здесь расписать какие плюшки включает тариф"
          >
            <div>{item.name}</div>
          </Tooltip>
        </Menu.Item>
      ))}
    </Menu>
  );
  const setActiveTimeDeposit = (period_from) => {
    dispatch(actionSetActiveDeposit(period_from));
  };

  const menuTimeDeposit = () => (
    <Menu>
      <MenuRows />
      {deposits
        .filter((item) => item.code === activeCodeDeposit)[0]
        .param.map((item) => (
          <Menu.Item
            key={item.period_from}
            onClick={() => setActiveTimeDeposit(item.period_from)}
          >
            <MenuItem item={item} />
          </Menu.Item>
        ))}
    </Menu>
  );
  return (
    <Wrapper>
      <Title>Депозитный калькулятор</Title>
      <Calculator>
        <Dropdown overlay={menuTypesDeposit} placement="bottomCenter" arrow>
          <DropdownBtnLeft>Выберите тип вклада</DropdownBtnLeft>
        </Dropdown>
        <Dropdown
          overlay={menuTimeDeposit}
          placement="bottomCenter"
          arrow
          disabled={!activeCodeDeposit}
        >
          <DropdownBtnRight disabled={!activeCodeDeposit}>
            Выберите срок вклада
          </DropdownBtnRight>
        </Dropdown>
      </Calculator>
    </Wrapper>
  );
};
