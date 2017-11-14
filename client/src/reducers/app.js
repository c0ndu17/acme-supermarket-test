import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = fromJS({
  drawerOpen: false
});

export default function app(state = initialState, action = {}){
  switch(action.type) {
    case types.DRAWER_OPEN:
      return state.set('drawerOpen', true);
    case types.DRAWER_CLOSE:
      return state.set('drawerOpen', false);
    default: 
      return state;
  }
}

