import { handleActions } from "redux-actions";

import {
  actionSetInitDepositData,
  actionSetActiveTypeDeposit,
  actionSetActiveDeposit,
} from "../actions/data";

const initCalc = {
  deposits: null,
  activeDeposit: null,
  activeCodeDeposit: null,
};

export const reducerData = handleActions(
  {
    [actionSetInitDepositData]: (state, { payload }) => {
      const { deposits } = payload;
      return {
        ...state,
        deposits,
      };
    },
    [actionSetActiveTypeDeposit]: (state, { payload }) => {
      return {
        ...state,
        activeCodeDeposit: payload,
        activeDeposit: null,
      };
    },
    [actionSetActiveDeposit]: (state, { payload }) => {
      let indexActiveDeposit = undefined;
      const filtredCode = state.deposits.filter(
        (item) => item.code === state.activeCodeDeposit
      )[0];

      const filtedParam = {
        ...filtredCode,
        param: filtredCode.param.filter((item, index) => {
          if (item.period_from === payload) {
            indexActiveDeposit = index;
          }
          return (
            item.period_from === payload || index === indexActiveDeposit + 1
          );
        }),
      };
      return {
        ...state,
        activeDeposit:
          filtedParam.param.length === 1
            ? {
                ...filtedParam,
                param: [...filtedParam["param"], { period_from: Infinity }],
              }
            : filtedParam,
      };
    },
  },
  initCalc
);
