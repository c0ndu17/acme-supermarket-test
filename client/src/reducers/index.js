import { combineReducers } from 'redux-immutable';

/**
 * Reducers
 */
import app from './app';
import basket from './basket';
import deal from './deal';
import product from './product';

export default combineReducers({
  app,
  basket,
  deal,
  product,
})
