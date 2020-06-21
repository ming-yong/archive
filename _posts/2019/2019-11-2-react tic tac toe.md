---
title: React Tic Tac Toe
description: I built a tic-tac-toe to learn React.
category: 2019
tags: React
image: /assets/images/2019/react/react_ticTacToe.gif
---

I will try to explain code of [React official tutorial: Tic Tac Toe](https://reactjs.org/tutorial/tutorial.html) in the order of:

- [Game class component](#game-class-component)
- [calculate winner function](#calculate-winner-function)
- [Board class component](#board-class-component)
- [Square function component](#square-function-component)

Here's my project [demo here](https://ming-yong.github.io/react-tic-tac-toe/) and [source code](https://github.com/ming-yong/react-tic-tac-toe) if you're interested.

## The final result

![demonstration of react tic tac toe]({{page.image}})

A tic tac toe browser game with feature of going back to any previous move.

## The code

![summary of react tic tac toe code]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_Summary.PNG)

We have 2 class components(`Board` and `Game`), 1 function components(`Square`), and a function(`calculateWinner`).

### Game class component

We want `Game` to remember three things:

- `stepNumber` as which step we are currently at.
- `xIsNext` as whose turn it is.
- `history` as how the board looks like when each step happened.

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      history:[{
        squares:Array(9).fill(null),
      }],
      stepNumber:0,
      xIsNext:true,
    };
  }
}

// ========================================
ReactDOM.render(<Game />, document.getElementById("root"));
```

As seen above, `history` looks something like this:

```js
[
  {
    squares:[
              null,null,null,
              null,null,null,
              null,null,null,
            ]
  }
]
```

We will call the items in `squares`, the 9 values, as **"squares layout"** in the following content.

Now, let's look at what `Game` renders.

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Game extends React.Component {
  constructor(props){...}
  
  render() {
    const history=this.state.history;//the updated "history"
    const current = history[this.state.stepNumber];//the latest "squares layout" in "history"
    const winner = calculateWinner(current.squares);//check if there is a winner
    const move = history.map((step,move)=>{//create "jumping to previous move" buttons from each "squares" in "history"
      const desc = move?
      "Go to move # "+ move:
      "Go to game start";
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if(winner){
      status="Winner: "+ winner;
    }else{
      status="Next player: "+ (this.state.xIsNext?"X":"O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}//"i" is the index of the square(one of the 9 values) in "squares"
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{move}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(<Game />, document.getElementById("root"));
```

We can see that `Game` returns a `game` div with two divs(`game-board` and `game-info`) nested inside, since we are at the beginning of a game, the `current.squares`, which is the latest "squares layout" in `history`, is an array with 9 `null` values, thus we have a board with empty squares.

![summary of react tic tac toe Game component code]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_Game.PNG)

We need a `handleClick`(when user clicks the square) and a `jumpTo`(when user clicks the button to go back to previous move) method in our `Game` as well.

```js
class Game extends React.Component {
  constructor(props){...}

  handleClick(i){
    const history = this.state.history.slice(0,this.state.stepNumber+1);//get a copy of the "history"
    const current = history[history.length-1];//set the last "squares layout" in "history" as the current
    const squares = current.squares.slice();//get a copy of the "squares layout" in "current"
    if(calculateWinner(squares)||squares[i]){
      //disable adding O or X if there is a winner or if the square is occupied
      return;
    }
    squares[i]=this.state.xIsNext?"X":"O";//put X or O in the square based on the flag
    //update the state
    this.setState({
      history:history.concat([{//pushing the current "squares layout" to the "history"
        squares:squares,
      }]),
      stepNumber:history.length,//update the step number
      xIsNext:!this.state.xIsNext,//flip the flag
      });
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,//reverse to the corresponding step
      xIsNext:(step%2)===0,//flip the flag
    });
  }

  render() {...}
```

This is what it looks like if we console out `history`:

In code:

```js
handleClick(i){
  const history = this.state.history.slice(0,this.state.stepNumber+1);
  console.log(history);
  const current = history[history.length-1];
  //...
}
```

In browser:

![what it's like if we console.log history]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_historyConsole.gif)

### calculate winner function

And to determine a winner, we added a function `calculateWinner`.

```js
function calculateWinner(squares) {
  //every possibility of winning a game
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //check if the "squares layout" matches any pattern.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

### Board class component

In the `Game` class component, we saw that a component `Board` is being rendered.

```js
<div className="game-board">
  <Board
    squares={current.squares}//an array with 9 values, it's the last item in history
    onClick={(i)=>this.handleClick(i)}//handleClick method
  />
</div>
```

The `handleClick` and `current.squares` are being passed into `Board` as props.

```js
class Board extends React.Component {
  
  renderSquare(i) {
    return (
      <Square
      value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
    </div>
    );
  }
}
```

In `Board`, we render three rows(`board-row`) with three squares in each. In the `renderSquare` method, `this.props.squares[i]` is a square(at index `i`) of the "squares layout"(`squares` is `current.squares` from `Game`) and `onClick` is a function(`handleClick` from `Game`). Both of there are passed into `Square` component as props.

### Square function component

```js
function Square(props){
  return (
    <button
    className="square"
    onClick={props.onClick}
    >
      {props.value}
    </button>);
}
```

Finally in the `Square` component, we render a button with a class of `"square"`, click event triggering the `onClick`(`onClick` in `Board`, `handleClick` in `Game`) function, displaying the `value`(a square of the "squares layout").
