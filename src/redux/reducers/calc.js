import { handleActions } from 'redux-actions';
import { renderProfitSumm } from '../../helpers/index';

import {
  setInitValueDeposit,
  changeValueDeposit,
  changeTimeDeposit,
} from '../actions/calc';

const initCalc = {
  valueDeposit: null,
  timeDeposit: null,
  profit: null,
  rate: null,
  typeDeposit: null,
};

export const reducerCalc = handleActions(
  {
    [setInitValueDeposit]: (state, { payload }) => {
      const {
        valueDeposit, timeDeposit, rate, typeDeposit,
      } = payload;
      return {
        ...state,
        valueDeposit,
        timeDeposit,
        rate,
        typeDeposit,
        profit: renderProfitSumm(valueDeposit, timeDeposit, rate),
      };
    },
    [changeValueDeposit]: (
      state,
      { payload: { valueDeposit, rate, typeDeposit } },
    ) => ({
      ...state,
      valueDeposit,
      rate,
      typeDeposit,
      profit: renderProfitSumm(valueDeposit, state.timeDeposit, rate),
    }),
    [changeTimeDeposit]: (
      state,
      { payload: { timeDeposit, rate, typeDeposit } },
    ) => ({
      ...state,
      timeDeposit,
      rate,
      typeDeposit,
      profit: renderProfitSumm(state.valueDeposit, timeDeposit, rate),
    }),
  },
  initCalc,
);
