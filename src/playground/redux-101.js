import { createStore } from'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
};

const resetCount = () => {
  return {
    type: 'RESET'
  }
};

const setCount = ({ count = 0 } = {}) => {
  return {
    type: 'SET',
    count
  }
};

const countReducer = (state = { count: 0 }, action) => {
  const { type, incrementBy, decrementBy } = action;
  switch (type) {
    case 'INCREMENT':
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

/*store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});*/

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));