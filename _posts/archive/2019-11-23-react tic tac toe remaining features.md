---
title: (Archive) React Tic Tac Toe additional features
description: I added remaining features to my React tic-tac-toe.
categories: [archive]
tags: [learning process]
image: /assets/images/2019/react/react_ticTacToe_complete.gif
---

In this post, I will finish up my React Tic Tac Toe by adding the following features:

- [Display the location for each move in the format (col, row) in the move history list.](#col-row-position)
- [Bold the currently selected item in the move list.](#currently-selected-move)
- [Rewrite Board to use two loops to make the squares instead of hard-coding them.](#rewrite-board-with-2-for-loops)
- [Add a toggle button that lets you sort the moves in either ascending or descending order.](#toggle-order-button)
- [When someone wins, highlight the three squares that caused the win.](#highlight-the-winning-path)
- [When no one wins, display a message about the result being a draw.](#draw-message)

## Final Result

![demonstration of react tic tac toe with additional features]({{page.image}})

## Col row position

![demonstration of col row position feature]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_colRowPosition.gif)

Adding the (col,row) to the move buttons requires 3 steps.

### Step1: Store the index of the square

```js
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      history:[{
        squares:Array(9).fill(null),
        position:0
      }],
      //...
    };
  }
  //...
}
```

In the `state` of the `Game` class component, I added a `position` with a value of `0` inside the `history` array.

### Step2: Use the index to locate the square

```js
class Game extends React.Component {
  //...
  handleClick(i){
    //....
    this.setState({
      history:history.concat([{
        squares:squares,
        position:i
      }]),
      stepNumber:history.length,
      xIsNext:!this.state.xIsNext,
    });
  }
  //...
}
```

When `state` is being update in `handleClick` method, `position` will be set to the `index` of the square.

### Step3: Display the square's location

```js
render() {
    const history=this.state.history;
    //...
    const move = history.map((step,move,position)=>{
      position = getPosition(step.position);
      const desc = move?
      "Go to move # "+ move +` (${position[0]}, ${position[1]})`:
      "Go to game start";
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    //...
}

function getPosition(location){
  const row = (location >=0 && location <=2)?1:(location>=3&&location<=5)?2:3;
  const col = ([0,3,6].includes(location))?1:([1,4,7].includes(location))?2:3
  return [col,row];
}
```

The `position` will then be passed into a function `getPosition` which return the row and col in an array, which will be use to display in the `button` we generate.

## Currently selected move

![demonstration of highlighting current selected move feature]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_currentMove.gif)

Instead of bold the currently selected item, I decided to highlight it by giving the current move a CSS class.

In CSS, I added two classes:

```css
/*normal button*/
.btn{
    padding:0.25em;
    margin:0.5em;
    background:white;
    border: 2px solid black;
    border-radius: 4px;
}

/*highlighted button*/
.btn_current{
  background:yellow;
}
```

Back to the `Game` class component, since it remembers the `stepNumber` which is set to the `history.length`, we can compare the `move` with `this.state.stepNumber` to check if it's the current move and give it the `btn_current` class if it is.

```js
render() {
  const history = this.state.history;
  const current = history[this.state.stepNumber];
  const winner = calculateWinner(current.squares);
  const move = history.map((step, move, position) => {
    position = getPosition(step.position);
    const desc = move ? "Go to move # " + move + ` (${position[0]}, ${position[1]})` : "Go to game start";
    return(
      <li key={move}>
        <button
        onClick={() => this.jumpTo(move)}
        className={move === this.state.stepNumber?"btn btn_current":"btn"}>
          {desc}
        </button>
      </li>
    )
  });
//...
```

## Rewrite board with 2 for loops

In this feature, my goal is to rewrite this:

```js
class Board extends React.Component {
//...
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
```

with 2 for loops. And I learned that:

- You can't do for loops in `return`.
- Keys only make sense in the context of the surrounding array.
- Using index as a key is not recommended(in this case, I should be fine).

```js
class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  createBoardOfSquares = () => {
    let boardOfSquares = [];
    let index=0;
    //outer loop to create parent
    for (let row = 0; row <3; row++) {
      let rowOfColumns = [];
      //inner loop to create children
      for (let col = 0; col < 3; col++) {
        rowOfColumns.push(this.renderSquare(index));
        index++;
      }
      boardOfSquares.push(<div className="board-row" key={index}>{rowOfColumns}</div>);
    }
    return boardOfSquares;
  };

  render() {
    return (
      <div>{this.createBoardOfSquares()}</div>
    );
  }
}
```

In order to solved the **"Warning: Each child in a list should have a unique "key" prop."** warning, we need to give **all children** an unique key, in this case we have 2 arrays: the `<Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />` and the `<div className="board-row" key={index}>{rowOfColumns}</div>`.

## Toggle order button

![demonstration of toggle move buttons' order feature]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_toggleOrder.gif)

This feature takes 3 steps. In `Game` component:

- Add a Boolean `isAscending` in the state.
- Add a function `changeOrder` to flip the boolean flag.
- Add a button which triggers the function when clicked.

```js
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //...
      isAscending: true
    };
  }

  //...

 changeOrder() {
   this.setState({
     isAscending: !this.state.isAscending
  });
 }

  //...

  return (
    <div className="game">
    <div className="game-board">
     <Board squares={current.squares} onClick={i => this.handleClick(i)} />
    </div>
    <div className="game-info">
     <button onClick={() => this.changeOrder()} className={this.state.isAscending ? "btn" : "btn btn_des"}>
      Change Order to {this.state.isAscending ? "Descending" : "Ascending"}!
     </button>
     <div>{status}</div>
     <ol>{this.state.isAscending ? move : move.reverse()}</ol>
    </div>
   </div>
  );
 }
}
```

As seen, my `button` triggers `changeOrder` function when it's clicked, have a class `btn_desc` when the order is in descending(my `btn_desc` is the same as `btn_current`), and the content changes based on the order.

The order changes in the `ol`, array prototype/method `reverse` will be apply to `move` if `isAscending` is false.

## Highlight the winning path

![demonstration of highlight winning path feature]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_winningPath.gif)

The first solution came to mind is passing the winning path array all the way to `Square` and apply a CSS class if the array `includes` the square.

First, return the winning path in function `calculateWinner`.

```js
function calculateWinner(squares) {
 const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];
 for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
   return [squares[a],lines[i]];
  }
 }
 return null;
}
```

Back to `Game` component, change the `winner` to `winner[0]` when displaying the `status` and pass the winning path array `winner[1]` as a props to `Board`.

```js
class Game extends React.Component {
//...
 render() {
//...
  const winner = calculateWinner(current.squares);
//...

  let status;
  let winningPath;
  if (winner) {
   status = "Winner: " + winner[0];
   winningPath=winner[1];
  } else {
   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
  }

  return (
   <div className="game">
    <div className="game-board">
     <Board squares={current.squares} onClick={i => this.handleClick(i)} winningPath={winner?winningPath:[]}/>
    </div>
    <div className="game-info">
     <button onClick={() => this.changeOrder()} className={this.state.isAscending ? "btn" : "btn btn_des"}>
      Change Order to {this.state.isAscending ? "Descending" : "Ascending"}!
     </button>
     <div>{status}</div>
     <ol>{this.state.isAscending ? move : move.reverse()}</ol>
    </div>
   </div>
  );
 }
}
```

In `Board`, pass the winning path and index to `Square`.

```js
class Board extends React.Component {
 renderSquare(i) {
  return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} winningPath={this.props.winningPath} index={i}/>;
  }
//...
}
```

In `Square`, add a class `winnerPath` if the index of the square is in the `winningPath` array. Class `winnerPath` gives the square a yellow background.

```js
function Square(props) {
 return (
  <button className={props.winningPath&&props.winningPath.includes(props.index)?"winnerPath square":"square"} onClick={props.onClick}>
   {props.value}
  </button>
 );
}
```

## Draw message

![demonstration of draw message feature]({{site.baseurl}}/assets/images/2019/react/react_ticTacToe_draw.gif)

This is the smallest feature to implement. Since a draw means `stepNumber` equals to 9, I can simply add a else/if statement in the `Game` component.

```js
class Game extends React.Component {
  //...
  let status;
  let winningPath;
  if (winner) {
   status = "🎉Winner: " + winner[0];
   winningPath=winner[1];
  }else if(this.state.stepNumber===9){
   status="👩‍⚖️It's a draw!";
  }
  else {
   status = "💁Next player: " + (this.state.xIsNext ? "X" : "O");
  }
}
```

Voilà, I have all the additional features in my Tic Tac Toe!
