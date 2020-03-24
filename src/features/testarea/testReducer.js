import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants';
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = {
  data: 42,
};

const incrementCounter = (state) => ({ ...state, data: state.data + 1 });
const decrementCounter = (state) => ({ ...state, data: state.data - 1 });

const testReducer = createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
});

export default testReducer;

/*const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};*/
