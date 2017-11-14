import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = fromJS({
  drawerOpen: false
});

export default function app(state = initialState, action = {}){
  return state;
}

