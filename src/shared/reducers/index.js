import { combineReducers } from 'redux';

import todo from '@todo/reducer';
import device from './deviceReducer';

const rootReducer = combineReducers({
  todo,
  device,
});

export default rootReducer;
