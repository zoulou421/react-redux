import React from 'react';
import { connect } from 'react-redux'

// Action creator
function incrementCounter(num) {
    return { type: 'INCREMENT', num: num }
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/*
In order to connect our component to the store, we need to call the connect() function.
The connect() function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.

function connect(mapStateToProps?, mapDispatchToProps?)
connect() takes two optional parameters:

mapStateToProps
This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.
For example, for our Counter, we need to return the count state variable

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

mapDispatchToProps
As you may have guessed from the name, this parameter is used to map the dispatch functions to props.
It can be a simple object, defining the function that needs to be mapped:
const mapDispatchToProps = {
  incrementCounter
}


This might seem a bit confusing, but its very straightforward: mapStateToProps simply returns the state variables as props to our component, while mapDispatchToProps allows to define how we dispatch actions and make the dispatching functions available as props.

Both are optional, as, for example, your component might only need to read from the store.

mapDispatchToProps can also be defined as a function. Take a look at the official documentation for more details:
https://react-redux.js.org/using-react-redux/connect-mapdispatch

Inside our component we just access the store properties using props:
function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
    return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
    </div>;
}
Now, the only thing left is to call the connect() function for our Counter component and render it on the page:
const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el = <Provider store={store}>
          <Counter/>
        </Provider>;

 Remember, connect() returns a new component, which wraps the component it received.

       
*/