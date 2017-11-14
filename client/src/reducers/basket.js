import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = fromJS({
  items: {},
});

export default function basket(state = initialState, action = {}) {
  return state;
}
