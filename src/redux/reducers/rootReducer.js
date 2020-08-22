import { combineReducers } from 'redux';

import { reducerData } from './data';
import { reducerCalc } from './calc';

export const rootReducer = combineReducers({
  reducerData,
  reducerCalc,
});
