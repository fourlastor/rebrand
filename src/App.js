import React from 'react';
import './App.css';
import audio from './audio.mp3';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'input'
    }

    this.audioRef = React.createRef();
  }

  play() {
    const audio = this.audioRef.current
    setTimeout(() => this.setState({stage: 'newbrand'}), 8144);
    audio.play()
    this.setState({ stage: 'oldbrand' })
  }

  form() {
    return (
      <div className="App">
        <input type="text" className="rebrand-input" placeholder="Insert your name..." value={this.state.name} onChange={(e) => this.updateName(e.target.value)}/>
        <button type="submit" className="rebrand-input" onClick={() => this.play()}>Rebrand</button>
      </div>
    );
  }

  oldBrand() {
    return (
      <div className="App">
        <div className="oldbrand">{this.state.name}</div>
      </div>
    );
  }

  newBrand() {
    return (
      <div className="App">
        <div className="rebrand">{this.state.name}</div>
      </div>
    );
  }

  updateName(name) {
    this.setState({name: name})
  }

  pickDisplay() {
    switch (this.state.stage) {
      case 'oldbrand':
        return this.oldBrand();
      case 'newbrand':
        return this.newBrand();
      case 'input':
      default:
        return this.form();
    }
  }

  render() {
    return (
      <div>
        {this.pickDisplay()}
        <audio
          ref={this.audioRef}
          id="audio"
          src={audio}
          preload="auto" />
      </div>
    );
  }
}

export default App;
