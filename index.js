/*import React from 'react';
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

const store = createStore(reducer);//To create the store, we call the createStore() function, which takes the reducer as its parameter

const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el = <Provider store={store}>
          <Counter/>
        </Provider>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';
import './style.css';

const initialState = {
    count: 0
};
// Reducer function
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.num };
        default:
            return state;
    }
}
//But how do we pass the store to our components?
//That is achieved using a special <Provider> element. It makes the store available to any nested child component.
//Provider takes the store as an attribute and makes it available to its child component.
const store = createStore(reducer);
const el = <Provider store={store}>
    <Counter />
</Provider>;

ReactDOM.render(
    el,
    document.getElementById('root')
);

