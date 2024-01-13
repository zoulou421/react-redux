import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './style.css';

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}

const initialState = {
  count: 0
};
// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
    return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
    </div>;
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
const mapDispatchToProps = {
  incrementCounter
}

const store = createStore(reducer);

const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el = <Provider store={store}>
          <Counter/>
        </Provider>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);