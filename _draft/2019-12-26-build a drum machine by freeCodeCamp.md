---
title: Build a drum machine by freeCodeCamp in React
description: Reading code "drum machine" project by freeCodeCamp.
categories: Reading
tags: FreeCodeCamp React CodeReading
---

I got stuck on "[Front End Libraries Projects - Build a Drum Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine)" so I decided to read the demo project code.

## Disclaimer

All of the code is from [freeCodeCamp](https://codepen.io/freeCodeCamp/pen/MJyNMd?editors=0010) and coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (codepen), not me, I am just reading them.

In this post, I will be reading the React part of this [drum machine project](https://codepen.io/freeCodeCamp/pen/MJyNMd?editors=0010).

## Code

The first thing I read is that it has two arrays of JSON objects for bank and two JSON objects for style to switch between.

```js
const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13
}

const inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: "3px 3px 5px black"
}
```

### Components

Starting from the highest component `App`:

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),//this means empty string " "
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    }
    //We need to "bind" as it's how JavaScript works,
    //visit https://reactjs.org/docs/handling-events.html for more detail
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.powerControl = this.powerControl.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  //switching "power" and update "display"
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }

  //if the "power" is on, switch to the opposite "bank"
  selectBank() {
    if (this.state.power) {
      this.state.currentPadBankId === 'Heater Kit' ?
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit',
        }) :
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit',
        });
    }
  }

  //if the "power" is on, update the "display" to "name"
  displayClipName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }

  //if the "power" is on, update the "sliderVal" with the "value" of event "e" and change the "display"
  //1 second later, call function "clearDisplay"
  adjustVolume(e) {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  //change the "display" to empty string
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    //if the "power" is on, float right
    const powerSlider = this.state.power ? {
      float: 'right'
    } : {
      float: 'left'
    };

    //if the current "bank" is bankOne, float right
    const bankSlider = this.state.currentPadBank === bankOne ? {
      float: 'left'
    } : {
      float: 'right'
    };

    {
    //we get all the element with class "clip" and create a copy(array) of it.
    //MDN doc about "call": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      //we loop through each of the "clip" and set the volume to "sliderVal"
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal
      });
    }

    return (
      <div id="drum-machine" className="inner-container">
        <PadBank
        power={this.state.power}
        updateDisplay={this.displayClipName}
        clipVolume={this.state.sliderVal}
        currentPadBank={this.state.currentPadBank} />

        <div className="logo">
          <div className="inner-logo ">{'FCC' + String.fromCharCode(160)}</div>
          <i className="inner-logo fa fa-free-code-camp" />
        </div>

        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div onClick={this.powerControl} className="select">
              <div style={powerSlider} className="inner" />
            </div>
          </div>
          <p id="display">{this.state.display}</p>
          <div className="volume-slider">
            <input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
          </div>
          <div className="control">
            <p>Bank</p>
            <div onClick={this.selectBank} className="select">
              <div style={bankSlider} className="inner" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
```

This is what App renders in pictures:

![image: App component]({{site.baseurl}}/assets/images/reading/drumMachine.PNG)

```js

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad() {
    if (this.props.power) {
      this.state.padStyle.backgroundColor === 'orange' ?
        this.setState({
          padStyle: inactiveStyle
        }) :
        this.setState({
          padStyle: activeStyle
        });
    } else {
      this.state.padStyle.marginTop === 13 ?
        this.setState({
          padStyle: inactiveStyle
        }) :
        this.setState({
          padStyle: {
            height: 77,
            marginTop: 13,
            backgroundColor: 'grey',
            boxShadow: "0 3px grey"
          }
        });
    }
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <div id={this.props.clipId}
        onClick={this.playSound}
        className="drum-pad"
        style={this.state.padStyle} >
          <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
          {this.props.keyTrigger}
      </div>
    )
  }
}

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    this.props.power ?
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
      clipId={padBankArr[i].id}
      clip={padBankArr[i].url}
      keyTrigger={padBankArr[i].keyTrigger}
      keyCode={padBankArr[i].keyCode}
      updateDisplay={this.props.updateDisplay}
      power={this.props.power} />
        )
      }) :
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <DrumPad
      clipId={padBankArr[i].id}
      clip="#"
      keyTrigger={padBankArr[i].keyTrigger}
      keyCode={padBankArr[i].keyCode}
      updateDisplay={this.props.updateDisplay}
      power={this.props.power} />
        )
      });
    return (
      <div className="pad-bank" >
    {padBank}
   </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
