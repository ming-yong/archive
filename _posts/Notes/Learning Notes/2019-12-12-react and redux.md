---
title: fcc | React and  Redux
description: Learning notes about React and  Redux.
categories: [Notes] 
tags: [Learning Notes]
---

## References

- [freeCodeCamp "Front End Libraries Certification"](https://www.freecodecamp.org/)

## Everything in one

```js
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState({
      input: ''
    });
    this.props.submitNewMessage(this.state.input);
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

## React and Redux

React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state.

### Manage state locally first

```js  
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }

  handleChange(event){
    this.setState({
      input:event.target.value,
      messages:this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input:"",
      messages:[...this.state.messages,this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
};
```

### Extract State logic to Redux

```js
//action type
const ADD = "ADD";

//action creator
const addMessage = message=>{
    return {
        type:ADD,
        message
    }
}

//reducer
const messageReducer = (state=[],action)=>{
    switch(action.type){
        case ADD:
            return [...state,action.message];
        default:
            return state;
    }
}

//create store, dispatching addMessage against the store, immutably add a new message to the array of messages held in state.
const store = Redux.createStore(messageReducer);
```

### Combining both and provider

```js
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
  render(){
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    );
  }
};

//Provider is a wrapper component from React Redux that wraps your React app.it then allows you to access the Redux store and dispatch functions throughout your component tree.

//takes 2 props: the Redux store and the child components of your app
<Provider store={store}>
  <App/>
</Provider>

//The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().
```

### Connect React and Redux: Provider and Connect

```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

//map state and props
const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

//map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

// Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps(). This is similar to how it uses store.subscribe() for components that are mapped to state.

const connect = ReactRedux.connect;
//both maps are optional, pass null if want to omit
const ConnectedComponent =connect(mapStateToProps,mapDispatchToProps)(Presentational);
```
