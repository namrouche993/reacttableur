// store.js
import { createStore } from 'redux';

const initialState = {
  hotInstance_redux:null,
  value1: 5,


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
        case 'SET_HOT':
          return {
            ...state,
            hotInstance_redux: action.payload,
          };
          case 'SET_VALUE1':
            return {
              ...state,
              value1: action.payload,
            };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
